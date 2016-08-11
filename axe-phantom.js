var PATH_TO_AXE = './src/axe/axe.min.js';
var fs = require('fs');
var page = require('webpage').create();

page.open('tmp/1453970269469.html', function (status) {
	// Check for page load success
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
		/*global window, axe */
		axe.a11yCheck(window.document, null, function (results) {
			window.callPhantom(results);
		});
	});

	page.onCallback = function (msg) {
		console.log(JSON.stringify(msg, null, '  '));
		phantom.exit();
	};
});