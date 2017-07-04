var page = require('webpage').create(),
	system = require('system'),
	fs = require('fs'),
    content='', 
	address  = system.args[1],
    standard = system.args[2],
	userName = system.args[3],
    scanDir = system.args[4],
    scrshot = system.args[5],    
    eLevel = system.args[6],
    screenshot_url ;

	if(userName !== "") {
        var cookieFile = 'cookies/' + userName + ".txt";
	}
	phantom.silent = true;
    page.onConsoleMessage = function (msg) {
        // console.log(msg);
    };
    page.onError = function (msg) {
        // console.log(msg);
        phantom.exit();        
    }; 

/***************** H E L P E R   F U N C T I O N S *******************/
    function restoreCookies(cookieFile) {
     	var fs = require("fs");
    	if (fs.exists(cookieFile)) {            
    		var cookies = fs.read(cookieFile);
    		cookies = JSON.parse(cookies);
    		//console.log("Restored cookies: " + JSON.stringify(cookies));
        	if (cookies.length > 0) {
        			for(var i=0; i<cookies.length; ++i)  {
        				var item = cookies[i];
        				if (item.expires) item.expires = Date.parse(item.expires);
        				if (item.expiry)    item.expiry = Date.parse(item.expiry);                             
        				phantom.addCookie(item);
        			}        	
        	}            
    	}
    }

    function formRows(msg){

                var  msgParts   = msg.code.split('.')
                    , principles = {
                        'Principle1': 'Perceivable',
                        'Principle2': 'Operable',
                        'Principle3': 'Understandable',
                        'Principle4': 'Robust'
                    }
                    , typeName = {
                          '1' : 'Error',
                          '2' : 'Warning',
                          '3' : 'Notice'
                    }                                         
                    , principle  = msgParts[1]
                    , sc         = msgParts[3].split('_').slice(0, 3).join('_')
                    , techniques = msgParts[4].split(',')
                    , outerHTML = ''
                    , priority
                    , screenshot_url =''                                                                
                                                                          
                content += '<tr class="error">';                
                content += '<td  class="number"><span class="flag">' + typeName[msg.type] + '</span></td>';
                content += '<td  class="messagePrinciple">';
                content += '<a href="http://www.w3.org/TR/WCAG20/#' + principles[principle].toLowerCase() + '" target="_blank">' + principles[principle] + '</a>';
                content += '</td>';

                // content += '<td  class="number"><span class="flag">' + priority + '</span></td>';
                content += '<td class="messageText"> ' + msg.msg + '</td>';
                content += '<td>' + msg.element  + '</td>';
                content += '<td class="messageTechniques"><ul>';
                for (var j = 0; j < techniques.length; j++) {
                    content += '<li><a href="http://www.w3.org/TR/WCAG20-TECHS/' + techniques[j] + '" target="_blank">' + techniques[j] + '</a></li>';
                }
                content += '</ul></td>';

                var rect = eval("(" + msg.rect + ')');

                if(rect.width!== 0 && rect.height!== 0){
                    
                    if(scrshot =='false'){
                        content += '<td class="messageTechniques">&nbsp;</td>';
                    }else {
                        var screenshot =Math.floor((Math.random()*1000)+1) +'.png';
                        screenshot_url=  scanDir + '/' + screenshot ;
                        // page.clipRect = rect;
                        page.clipRect = { left: rect.left, top: rect.top, width: rect.width + 100 , height: rect.height + 100 };
                        page.render(screenshot_url);
                        content += '<td class="screenshot"><a data-toggle="modal" data-target="#screenshot"  onClick=showImg("'+ screenshot_url+'")><img src="' + screenshot_url + '" style="width:25px;height:25px"></a></td>';
                    } 
                }else{
                    content += '<td class="messageTechniques">&nbsp; No scr</td>';                    
                }

                content += '</tr>';
    }    

    function outputToHtml(msgs){
        var heading ='' 
            , msg
            , errors   = 0
            , warnings = 0
            , notices  = 0
            , count=1

        if (msgs.length === 0) {
            content += '<span class="no-violations">No violations found</span>';
            content += '</div>';
            return;
        }       
    
        content += '<table id="test-results-table" class="tablesorter">';
        content += '<thead><tr><th>Error Level</th><th>Principle</th><th>Message</th><th>Code snippet</th><th>Techniques</th><th>Screenshot</th></thead></tr><tbody>';

        // console.log('Debug eLevel -> ', eLevel);
        
         for (var key in msgs) {
            msg = msgs[key];
            
            if(eLevel.indexOf(msg.type) !=-1 ) {
                if(msg.type==1) errors++;
                if(msg.type==2) warnings++;
                if(msg.type==3) notices++;

                formRows(msg);
            }   //if loop
        }   //for loop

        heading += '<h3>' + msgs['title'] +'</h3>';

        if(address.indexOf("file:") === -1){
            heading += '<h4>' + msgs['address'] + '</h4>';
        }
        count = errors + warnings + notices;
        heading += '<ul id="results-overview"><li class="active">';
        heading += '<span class="result-count result-count-errors">' + errors + '</span><span class="result-type">errors</span></a></li>';
        heading += '<span class="result-count result-count-warnings">' + warnings + '</span><span class="result-type">warnings</span></a></li>';
        heading += '<span class="result-count result-count-notices">' + notices + '</span><span class="result-type">notices</span></a></li>';

        heading += '</ul>';

        if(address.indexOf("file:") === -1){
            heading +='<a href="#" class="button-link" id="export">Export as CSV</a>';
        }
        if(errors === 0) {
            content += '<tr><td colspan="6"> ----  No Errors ---  </td></tr>';
        }

        content += '</tbody></table>';

        content  ='<div id="resultsWrapper" class="resultsWrapperActive">' + heading + content +'</div>';

        return content;
    }

/***************** E N D   H E L P E R   F U N C T I O N S *******************/   



    if(userName != "") {
        restoreCookies(cookieFile);
    }

    page.open(address, function (status) {
    // F O R   T E S T I N G    
    // page.open('about:blank', function (status) {
    // page.content = '<input type="text" id="1"> <input type="text" id="2">PLAIN TEXT';
        
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        } else {
            window.setTimeout(function () {
                page.onConsoleMessage = function (msg) {
                    if (msg === 'done') phantom.exit();
                    console.log(msg);
                };

                var fs = require('fs');
                page.injectJs('./src/htmlcs/build/HTMLCS.js');

                var data = {
                    standard : standard
                };

                switch (standard) {
                    case 'WCAG2A':
                    case 'WCAG2AA':
                    case 'WCAG2AAA':
                        var results = page.evaluate(function(data) {
                            var standard = data.standard
                                , messages, msgJson ={}
                                , splitLine = function (s, n) {           //Break the code snippet into multiple lines
                                    var b = '';
                                    while (s.length > n) {
                                        var c = s.substring(0,n);
                                        var d = c.lastIndexOf(' ');
                                        var e =c.lastIndexOf('\n');
                                        if (e != -1)    d = e;
                                        if (d == -1)    d = n;
                                        b += c.substring(0,d) + '\n';
                                        s = s.substring(d+1);
                                    }
                                    return b+s;
                                 }

                            HTMLCS.process(standard, document, function() {
                                messages = HTMLCS.getMessages();
                                for (var i = 0 ,l = messages.length ; i < l ; i++) {
                                    var msg = messages[i]
                                        , outerHTML;

                                    if (msg.element.innerHTML.length > 50)  outerHTML = msg.element.outerHTML.replace(msg.element.innerHTML, msg.element.innerHTML.substr(0, 50) + '...');
                                    else outerHTML = msg.element.outerHTML;
                                    
                                    msgJson[i] = {
                                                      "type"    : msg.type
                                                    , "element" : splitLine(outerHTML.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'), 30)
                                                    , "msg"     : msg.msg
                                                    , "code"    : msg.code
                                                    , "rect"    : JSON.stringify( msg.element.getBoundingClientRect() )
                                                }    
                                }   //End for loop

                                msgJson['title'] = document.title;
                                msgJson['address'] = document.location.href

                            })          //End HTMLCS.process

                            //console.log(msgJson);
                            return  msgJson;

                        }, data);       //End evaluate

                    break;
                    default:
                        console.log('Unknown standard.');
                        phantom.exit();
                    break;
                }

                // console.log(JSON.stringify(results));
                var htmlStr = outputToHtml(results);
                console.log(htmlStr);
                phantom.exit();
            }, 200);
        }//end if
    });//end
