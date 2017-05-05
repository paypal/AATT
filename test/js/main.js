function chromeDevTool(ifrDoc){
        //Chrome Developer Tools   
        //https://github.com/GoogleChrome/accessibility-developer-tools 
        var configuration = new axs.AuditConfiguration();
        configuration.showUnsupportedRulesWarning = false;
        configuration.scope = ifrDoc.body;
        var results = axs.Audit.run(configuration);
        var audit = results.map(function (result) {
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
        var chromeDiv = document.getElementById('chromeres');
        var chromeres = document.createElement("div");
        chromeres.setAttribute("id", "chromeres");
        chromeres.appendChild( buildHtmlTable( audit ,'Chrome Accessibility Plugin','yes') );
        chromeDiv.parentNode.replaceChild(chromeres, chromeDiv);
}

//Axe-core  https://github.com/dequelabs/axe-core
function axeTool(ifrDoc){
    axe.a11yCheck(ifrDoc.body, function (results) {
    // console.log(ifrDoc.body, results);
        var violations = results.violations
        for (var i=violations.length;i--;){
            delete violations[i].helpUrl;
            delete violations[i].tags;         
            console.log(violations[i].nodes)
            var nodes= violations[i].nodes
            for (var j=nodes.length;j--;){
                violations[i].target = JSON.stringify(nodes[j].target) +'<br>'+violations[i].target;
            }            
            delete violations[i].nodes;            
        }
        var axeDiv = document.getElementById('axeres');
        var axeres = document.createElement("div");
        axeres.setAttribute("id", "axeres");
        axeres.appendChild( buildHtmlTable( results.violations ,'Axe validator from Deque','no' ) );
        axeDiv.parentNode.replaceChild(axeres, axeDiv);
        // window.stop();        
    });
}

//https://github.com/squizlabs/HTML_CodeSniffer.git
function htmlcsTool(ifrDoc, options){
    var standard = options.standard || 'WCAG2A';
    var source = ifrDoc.body;
    // console.log(options.standard, source)
    HTMLCS.process(standard, source, function() {
        var msgs = HTMLCS.getMessages();
        var content = [];
        var heading = "";
        var type = '';
        var outerHTML = '';
        
        var htmlcsDiv = document.getElementById('htmlcsres');
        var htmlcsres = document.createElement("div");
        htmlcsres.setAttribute("id", "htmlcsres");
        htmlcsDiv.innerHTML='';  

        try {
            var principles = {
                    'Principle1': 'Perceivable',
                    'Principle2': 'Operable',
                    'Principle3': 'Understandable',
                    'Principle4': 'Robust'
                };

            if (msgs.length === 0) {
                content.push({'message':'No violations found'});
                return;
            }

            var errors   = 0;
            var warnings = 0;
            var notices  = 0;
            var count=1;

            for (var i = 0; i < msgs.length; i++) {
                var msg = msgs[i];
                var temp_obj = {};

                switch (msg.type) {
                    case HTMLCS.ERROR:
                        type = 'Error';
                        break;
                    case HTMLCS.WARNING:
                        type = 'Warning';
                        warnings++;
                    break;
                    case HTMLCS.NOTICE:
                        type = 'Notice';
                        notices++;
                    break;
                    default:
                        type = 'Unknown:' + msg.type +' ';
                    break;
                }

                if (msg.element.innerHTML && msg.element.innerHTML.length > 50) {
                    var outerHTML = msg.element.outerHTML.replace(msg.element.innerHTML, msg.element.innerHTML.substr(0, 50) + '...');
                } else {
                    var outerHTML = msg.element.outerHTML;
                }

                // Get the success criterion so we can provide a link.
                var msgParts   = msg.code.split('.');
                var principle  = msgParts[1];
                var sc         = msgParts[3].split('_').slice(0, 3).join('_');
                var techniques = msgParts[4];
                techniques     = techniques.split(',');

                msgParts.shift();
                msgParts.unshift('[Standard]');
                var noStdMsgParts = msgParts.join('.');

                // if(type !== "Warning" &&  type !== "Notice" && prtyArr.indexOf(priority) !=-1 ) {       //&& prtyArr.indexOf(priority) === 0
                    errors += 1;
                    temp_obj["type"] = type.toLowerCase();
                    temp_obj["msg"] = msg.msg;
                    temp_obj["code"] = splitLine(outerHTML.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'), 30);
                    temp_obj["principle"] = '<a href="http://www.w3.org/TR/WCAG20/#' + principles[principle].toLowerCase() + '" target="_blank">' + principles[principle] + '</a>';
                    var technique='';
                    for (var j = 0; j < techniques.length; j++) {
                        technique += '<a href="http://www.w3.org/TR/WCAG20-TECHS/' + techniques[j] + '" target="_blank">' + techniques[j] + '</a>';

                    }
                    temp_obj["techniques"] = technique;
                    count++;
                    content.push(temp_obj);
                // }
                
            } //Closing for loop

        } catch (e) {
            console.log('Error:', e.toString());
        }     
        htmlcsres.appendChild(buildHtmlTable(content , 'HTML CodeSniffer  from SquizLabs','yes' ) );
        htmlcsDiv.parentNode.replaceChild(htmlcsres, htmlcsDiv);
        window.stop();
    });

}   //End htmlcsTool
