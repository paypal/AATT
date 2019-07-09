var fs = require('fs');
var path =require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs-prebuilt');
var binPath = phantomjs.path;

var debug = require('debug');
var log = debug('AATT:log');
var error = debug('AATT:error');

function evaluate(options) {
    var engine  = options.engine;      //Eg htmlcs, chrome, axe        default:htmlcs
    var output = options.output;       // Eg. json, string         default: string
    var level = options.level;         //E.g. WCAG2AA, WCAG2A, WCAG2AAA, Section508    default:WCAG2AA
    var errLevel = options.errLevel;   // Eg. 1,2,3   1 means Error, 2 means Warning, 3 means Notice   default:1,2,3
    var source = options.source;
    var tempFilename = path.join(__dirname, 'tmp', new Date().getTime() + '.html');

    if(typeof engine === 'undefined' || engine ==='') engine = 'htmlcs';
    if(typeof output === 'undefined' || output ==='') output = 'string';
    if(typeof level === 'undefined' || level ==='') level = 'WCAG2AA';
    if(typeof errLevel === 'undefined' || errLevel ==='') errLevel = '1,2,3';

    source = source.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,'');  //replaces script tags

    return new Promise(function(resolve) {
        fs.writeFile(tempFilename, source , function (err,data) {
            if (err) throw err;
            var config = '--config=' + path.join(__dirname, 'config', 'config.json');

            if(engine === 'htmlcs'){
                var childArgs = [config, path.join(__dirname, 'src/HTMLCS_Run.js'), tempFilename, level, errLevel, output];
            }
            if(engine === 'axe'){
                var childArgs = [config, path.join(__dirname, 'src/axe_url.js'),  tempFilename, output];
            }
            if(engine === 'chrome'){
                var childArgs = [config, path.join(__dirname, 'src/chrome_url.js'), tempFilename, output]
            }
            log('E N G I N E ' , engine, binPath, childArgs);

            childProcess.execFile(binPath, childArgs, { cwd: __dirname }, function(err, stdout, stderr) {
                stdout = stdout.replace('done','');

                resolve(stdout);

                fs.unlink(tempFilename, (err) => {
                    if (err) {
                        log("failed to delete : "+ err);
                    } else {
                        log('successfully deleted ' + tempFilename);
                    }
                });
            })
        })
    });
}

module.exports = { evaluate };
