
var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path


var source = '<!DOCTYPE html><html lang="en"><meta charset="utf-8"><head><title>Home - PayPal Accessibility Tool</title></head><body>'
            +   '<div>Test div : <input> </div>'
            + '</body></html>';

var childArgs = [
  path.join(__dirname, 'ptest2.js'),
  source
]

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
  console.log('Error', JSON.stringify(stderr));
  console.log('Output', JSON.stringify(stdout));
})




/*
if ( typeof(phantom) !== "undefined" ) {
    var page = require('webpage').create();

    // Route "console.log()" calls from within the Page context to the main Phantom context (i.e. current "this")
    page.onConsoleMessage = function(msg) {
        console.log(msg);
    };

    page.onAlert = function(msg) {
        console.log(msg);
    };

    console.log("* Script running in the Phantom context.");
    console.log("* Script will 'inject' itself in a page...");
    page.open("about:blank", function(status) {
        if ( status === "success" ) {
            console.log(page.injectJs("injectme.js") ? "... done injecting itself!" : "... fail! Check the $PWD?!");
        }
        phantom.exit();
    });
} else {
    console.log("* Script running in the Page context.");
}
*/