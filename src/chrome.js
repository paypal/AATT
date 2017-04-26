    var page = require('webpage').create();
    var args = require('system').args;
    var PATH_TO_CHROME = './src/chrome/dist/js/axs_testing.js';
    
    var contentType= args[1];
    var url='';
	var jsonOp = [];

    page.content = args[2];
    var output   = args[3];

    phantom.silent = true;
    page.settings.webSecurityEnabled = false;
    page.injectJs(PATH_TO_CHROME);

    // console.log('O U T P U T ' , output);

    var screenshot_url=  'screenshots/' +  Math.floor((Math.random()*1000)+1) +'.png';
    // page.render(screenshot_url);

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

        var audit = results.map(function(result) {
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
    if(output==='string'){
        var htmlStr = buildHtmlTable(evalData ,'Chrome Accessibility Plugin');
    }else {
        var htmlStr = buildJsonObj(evalData ,'Chrome Accessibility Plugin' );
    }            
    console.log(htmlStr);
    phantom.exit();


    /***************** H E L P E R   F U N C T I O N S *******************/
       // Builds the HTML Table out of myList json data from Ivy restful service.
        function buildHtmlTable(arr) {
            var heading ='' 
                , msg
                , content = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title>Google Chrome a11y tool Results</title><style>table, th, td {border: 1px solid blue;}</style></head><body>'
        
            if (arr.length === 0) {
                content += '<span class="no-violations">No violations found</span>';
                content += '</div>';
                return;
            }           
            content += '<table id="test-results-table" class="tablesorter">';
            content += '<thead><tr><th>Heading</th><th>Result</th><th>severity</th><th>Elements</th></tr></thead><tbody>';
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
        function buildJsonObj(arr){
            if (arr.length === 0) {
                jsonOp.push({'message':'No violations found'});
                return;
            }           
            for (var key in arr) {
                msg = arr[key];
                var temp_obj = {};
                temp_obj["heading"] = msg.heading;
                temp_obj["result"] = msg.result;
                temp_obj["severity"] = msg.severity;
                temp_obj["elements"] = msg.elements;
                jsonOp.push(temp_obj);                
            }
            return JSON.stringify(jsonOp);  
        }        
    /***************** E N D   H E L P E R   F U N C T I O N S *******************/
