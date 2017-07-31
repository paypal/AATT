    var page = require('webpage').create();
    var fs = require('fs');
    var args = require('system').args;    
    var url  = args[1];
    var standard = args[2];
    var errLevel = args[3];
    var output   = args[4];
    var screenshot_url ='';

	phantom.silent = true;

    // console.log(url, standard, errLevel, output, screenshot_url)
    // phantom.exit();

    page.open(url, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        } else {
            window.setTimeout(function () {
                // Override onConsoleMessage function for outputting.
                page.onConsoleMessage = function (msg) {
                    if (msg === 'done') {
                        setTimeout(function(){
                            phantom.exit();
                        }, 0);                           
                    }                            
                    console.log(msg);
                };

                page.onError = function (msg) {
                    console.log(msg);
                    phantom.exit();
                };    

                page.injectJs('./src/htmlcs/build/HTMLCS.js');

                // console.log('O U T P U T ' , output);
                // console.log('errLevel' , errLevel);

                if(output==='json'){
                    page.injectJs('runner_json.js');
                } else{
                    page.injectJs('runner_html.js');
                }
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
                        // phantom.exit();
                        setTimeout(function(){
                            phantom.exit();
                        }, 0);                
                    break;
                }   //switch                
            }, 200);        //E N D  window.setTimeout
        }//end if else
    });//end        