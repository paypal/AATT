var PATH_TO_AXE = './src/axe/axe.min.js';
var fs = require('fs');
var args = require('system').args;
var page = require('webpage').create();

//source from  https://github.com/dequelabs/axe-core/blob/master/doc/examples/phantomjs/axe-phantom.js 

page.open(args[1], function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
        return;
    }

    page.injectJs(PATH_TO_AXE);
    page.framesName.forEach(function (name) {
        page.switchToFrame(name);
        page.injectJs(PATH_TO_AXE);
    });
    page.switchToMainFrame();
    page.evaluateAsync(function () {
        axe.a11yCheck(document.body, null, function (results) {
            window.callPhantom(results);
        });
    });

    page.onCallback = function (msg) {
        var violations = msg.violations
        for (var i=violations.length;i--;){
            delete violations[i].helpUrl;
            delete violations[i].tags;              
            delete violations[i].nodes;
        } 
        // console.log(JSON.stringify(msg, null, '  '));
        var htmlStr = buildHtmlTable( violations ,'Axe Accessibility Plugin' );
        console.log(htmlStr);        
        phantom.exit();
    };
});


/***************** H E L P E R   F U N C T I O N S *******************/
    function buildHtmlTable(arr) {
        var heading ='' 
            , msg
            , content = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title>Axe Results</title><style>table, th, td {border: 1px solid green;}</style></head><body>'
    
        if (arr.length === 0) {
            content += '<span class="no-violations">No violations found</span>';
            content += '</div>';
            return;
        }           
        content += '<table id="test-results-table" class="tablesorter">';
        content += '<thead><tr><th>Id</th><th>Description</th><th>Help</th><th>Impact</th></tr></thead><tbody>';
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