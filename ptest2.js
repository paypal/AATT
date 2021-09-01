var args = require('system').args;
var source= args[1];
var page = require('webpage').create();
var PATH_TO_AXE = './src/axe/axe.js';

page.settings.webSecurityEnabled = false;
page.content = source;

page.injectJs(PATH_TO_AXE);
page.framesName.forEach(function (name) {
    page.switchToFrame(name);
    page.injectJs(PATH_TO_AXE);
});
page.switchToMainFrame();
page.evaluate(function () {
    axe.run(document.body, function(err, results) {
        window.callPhantom(results);
    });
});

page.onCallback = function (results) {
  console.log(JSON.stringify(results))
  phantom.exit();
}