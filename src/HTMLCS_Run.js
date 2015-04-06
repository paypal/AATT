var page = require('webpage').create(),
	system = require('system'),
	fs = require('fs'),
	
    address  = system.args[1],
    standard = system.args[2],
    priority = system.args[3],
    output   = system.args[4],

    screenshot_url ;

	phantom.silent = true;
	page.onConsoleMessage = function (msg) {
    	// console.log(msg);
	};


	page.onError = function (msg) {
        // console.log(msg); 
    };
	
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        } else {
            window.setTimeout(function () {

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

                if(output==='json'){
                    page.injectJs('runner_json.js');
                } else{
                    page.injectJs('runner_html.js');
                }    
                if(address.indexOf("file:") === -1){
                    screenshot_url=  'screenshots/' +  Math.floor((Math.random()*1000)+1) +'.png';
                    page.render(screenshot_url);
                }
                var data = {
                    standard : standard,
                    priority: priority,
                    screenshot_url : screenshot_url
                };

                switch (standard) {
                    case 'WCAG2A':
                    case 'WCAG2AA':
                    case 'WCAG2AAA':
                        page.evaluate(function(data) {
                            var screenshot_url = data.screenshot_url;
                            var standard = data.standard;
                            var prty = data.priority;
                            
                            HTMLCS_RUNNER.run(standard, screenshot_url, prty);
                        }, data);
                    break;
                    default:
                        console.log('Unknown standard.');
                        // phantom.exit();
                        setTimeout(function(){
                            phantom.exit();
                        }, 0);                
                    break;
                }
            }, 200);
        }//end if
    });//end
