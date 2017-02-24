    var page = require('webpage').create();
    var fs = require('fs');
    var args = require('system').args;
    
    page.content = args[1];

    var standard = args[2];
    var errLevel = args[3];
    var output   = args[4];
    var screenshot_url ='';

	phantom.silent = true;

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
    var injectAllStandards = function(dir) {
        var files = fs.list(dir),
            filesLen = files.length,
            absPath = '';
        for (var i = 0; i < filesLen; i++) {
            if (files[i] === '.' || files[i] === '..') continue;
            absPath = fs.absolute(dir + '/' + files[i]);
            if (fs.isDirectory(absPath) === true) {
                injectAllStandards(absPath);
            } else if (fs.isFile(absPath) === true) {
                page.injectJs(absPath);
            }
        }
    };

    injectAllStandards('./src/htmlcs/Standards');                
    page.injectJs('./src/htmlcs/HTMLCS.js');

    // console.log('O U T P U T ' , output);
    // console.log('errLevel' , errLevel);

    if(output==='json'){
        page.injectJs('runner_json.js');
    } else{
        page.injectJs('runner_html.js');
    }    

    //Commenting as no need to create full page screenshots for each API request
    /*
    if(address.indexOf("file:") === -1){
        screenshot_url=  'screenshots/' +  Math.floor((Math.random()*1000)+1) +'.png';
        page.render(screenshot_url);
    }
    */

    var data = {
        standard : standard,
        screenshot_url : screenshot_url,
        errLevel:  errLevel
    };

    switch (standard) {
        case 'WCAG2A':
        case 'WCAG2AA':
        case 'WCAG2AAA':
        case 'Section508':                    
            page.evaluate(function(data) {
                var screenshot_url = data.screenshot_url;
                var standard = data.standard;
                var errLevel = data.errLevel;
                
                HTMLCS_RUNNER.run(standard, screenshot_url, errLevel);
            }, data);
        break;
        default:
            console.log('Unknown standard.');
            setTimeout(function(){
                phantom.exit();
            }, 0);                
        break;
    }