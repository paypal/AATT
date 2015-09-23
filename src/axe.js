var page = require('webpage').create(),
	system = require('system'),
	fs = require('fs'),
	
    address  = system.args[1],
    output   = system.args[2],

    screenshot_url ;

	// phantom.silent = true;              //For debugging set it false
	page.onConsoleMessage = function (msg) {
    	console.log(msg);
	};


	page.onError = function (msg) {
        console.log(msg); 
    };

    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        } else {
            window.setTimeout(function () {
                page.onError = function (msg) {
                    if (msg === 'done') {
                        setTimeout(function(){
                            phantom.exit();
                        }, 0);                           
                    }                             
                    console.log(msg); 
                };
                // Override onConsoleMessage function for outputting.
                page.onConsoleMessage = function (msg) {
                    if (msg === 'done') {
                        // phantom.exit();
                        setTimeout(function(){
                            phantom.exit();
                        }, 0);                           
                    }                            
                    console.log(msg);
                };

                // Include all sniff files.
                var fs = require('fs');            
                page.injectJs('./src/axe/axe.min.js');

                // console.log('O U T P U T ' , output);
 
                if(address.indexOf("file:") === -1){
                    screenshot_url=  'screenshots/' +  Math.floor((Math.random()*1000)+1) +'.png';
                    // page.render(screenshot_url);
                }

                var data = {
                    screenshot_url : screenshot_url
                };
                var evalData = page.evaluate(function(data) {
                    var screenshot_url = data.screenshot_url;
                    var audit = axe.a11yCheck(document.body, function (results) {
                        var violations = results.violations
                        for (var i=violations.length;i--;){
                            delete violations[i].helpUrl;
                            delete violations[i].tags;              
                            delete violations[i].nodes;
                        } 
                        return violations;
                    });
                    return  audit;
                }, data);
                // console.log(evalData);
                var htmlStr = buildHtmlTable( evalData ,'Axe Accessibility Plugin');
                console.log(htmlStr);
                phantom.exit();
            }, 200);
        }//end if
    });//end  page.open

    /***************** H E L P E R   F U N C T I O N S *******************/
        function buildHtmlTable(arr) {
            var heading ='' 
                , msg
                , content = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title>Evaluate</title></head><body>'
        
            if (arr.length === 0) {
                content += '<span class="no-violations">No violations found</span>';
                content += '</div>';
                return;
            }           
            content += '<table id="test-results-table" class="tablesorter">';
            content += '<thead><tr><th>Id</th><th>Description</th><th>severity</th><th>Help</th><th>Impact</th></tr></thead><tbody>';
            for (var key in arr) {
                msg = arr[key];
                content += '<tr class="error">';
                    content += '<td  class="messagePrinciple">' + msg.id + '</td>';
                    content += '<td  class="messagePrinciple">' + msg.description + '</td>';
                    content += '<td  class="messagePrinciple">' + msg.help + '</td>';
                    content += '<td  class="messagePrinciple">' + msg.impact + '</td>';
                content += '</tr>';
            }    
            content += '</tbody></table>';
            content += '</body></html>';
            return content;
        }
    /***************** E N D   H E L P E R   F U N C T I O N S *******************/
