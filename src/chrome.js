var page = require('webpage').create(),
	system = require('system'),
	fs = require('fs'),
	
    address  = system.args[1],
    output   = system.args[2],

    screenshot_url ;

	// phantom.silent = true;              //For debugging set it true
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
                page.injectJs('./src/chrome/dist/js/axs_testing.js');

                // console.log('O U T P U T ' , output);
 
                if(address.indexOf("file:") === -1){
                    screenshot_url=  'screenshots/' +  Math.floor((Math.random()*1000)+1) +'.png';
                    page.render(screenshot_url);
                }
                var data = {
                    screenshot_url : screenshot_url
                };
                
                var evalData = page.evaluate(function(data) {
                    var screenshot_url = data.screenshot_url;

                    var configuration = new axs.AuditConfiguration();
                    configuration.showUnsupportedRulesWarning = false;
                    configuration.scope = document.body;
                    var results = axs.Audit.run(configuration);

                    // console.log(JSON.stringify(document.body));

                    var audit = results.map(function    (result) {
                        var DOMElements = result.elements;
                        var message = '';
                        if(result.result ==='FAIL'){
                            if (DOMElements !== undefined) {
                                var maxElements = Math.min(DOMElements.length, 5);

                                for (var i = 0; i < maxElements; i++) {
                                    var el = DOMElements[i];
                                    message += '\n';
                                    try {
                                        message += axs.utils.getQuerySelectorText(el);
                                    } catch (err) {
                                        message += ' tagName:' + el.tagName;
                                        message += ' id:' + el.id;
                                    }
                                }
                            }
                            return {
                                heading: result.rule.heading,
                                result: result.result,
                                severity: result.rule.severity,
                                elements: message
                            };
                        }   //Return Failures only
                    });

                    // var report =  axs.Audit.createReport(results);
                    for (var i=audit.length;i--;){
                      if (audit[i] == null) audit.splice(i,1);
                    }
                    return  audit;
                }, data);
                var htmlStr = buildHtmlTable( evalData ,'Chrome Accessibility Plugin');
                console.log(htmlStr);
                phantom.exit();
            }, 200);
        }//end if
    });//end

    /***************** H E L P E R   F U N C T I O N S *******************/
       // Builds the HTML Table out of myList json data from Ivy restful service.
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
            content += '<thead><tr><th>Heading</th><th>Result</th><th>severity</th><th>Elements</th><th>Screenshot</th></tr></thead><tbody>';
            for (var key in arr) {
                msg = arr[key];
                content += '<tr class="error"><td  class="number"><span class="flag">' + msg.heading + '</span></td>';
                content += '<td  class="messagePrinciple">' + msg.result + '</td>';
                content += '<td  class="messagePrinciple">' + msg.severity + '</td>';
                content += '<td  class="messagePrinciple">' + msg.elements + '</td>';
                content += '</tr>';
            }    
            content += '</tbody></table>';
            content += '</body></html>';
            return content;
        }
    /***************** E N D   H E L P E R   F U N C T I O N S *******************/
