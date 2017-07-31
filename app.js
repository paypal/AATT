//R E Q U I R E S
var express = require('express')
var app = express();
var http = require('http'); 
var https = require('https');
var cons = require('consolidate')
var childProcess = require('child_process');
var path =require('path');
var phantomjs = require('phantomjs/lib/phantomjs');
var binPath = phantomjs.path
var fs = require('fs');
var bodyParser = require('body-parser');
var session = require('express-session');
var debug = require('debug');
var log = debug('AATT:log');
var error = debug('AATT:error');
var nconf = require('nconf');

nconf.env().argv();

// B A S I C 	C O N F I G
var http_port = nconf.get('http_port') || 80;		// Start with Sudo for starting in  port 80 or 443
var https_port = nconf.get('https_port') || 443;
var ssl_path= 'cert/ssl.key';
var cert_file = 'cert/abc.cer';


app.set('views', __dirname + '/views');
app.engine('html', cons.handlebars);
app.set('view engine', 'html');

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use(session({ resave: true,
	      saveUninitialized: true,
	      secret: 'uwotm8' }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));
app.use('/test', express.static(__dirname + '/test'));
app.use('/screenshots', express.static(__dirname + '/screenshots'));
app.use('/Auditor',express.static(path.join(__dirname, 'src/HTML_CodeSniffer/Auditor')));    
app.use('/Images',express.static(path.join(__dirname, 'src/HTML_CodeSniffer/Auditor/Images')));


if (fs.existsSync(ssl_path)) {
		var hskey = fs.readFileSync(ssl_path);
		var hscert = fs.readFileSync(cert_file) ; 	
		var options = {
		    key: hskey,
		    cert: hscert
		};
		var httpsServer = https.createServer(options, app);
		httpsServer.listen(https_port);
		log('Express started on port ' , https_port);

} else {
		var server = http.createServer(app);
		app.listen(http_port);					
		log('Express started on port ', http_port);
}

	app.get('/', function(req, res) {
		res.render('index.html',{data:''});
	});

	app.get('/help', function(req, res) {
		res.render('help.html');
	});

	app.get('/getURL', function(req, res) {
		res.render('index.html',{data:''});
	});

	app.post('/sniffURL', function(req, res) {
 		var childArgs
 		, userName = ''
 		, d = new Date()
        , customDateString = d.getHours() +'_'  + d.getMinutes() + '_' + d.getSeconds() +'_'+ d.getMonth() + '_' + d.getDate() + '_' + d.getFullYear()
        , dirName = "screenshots/" + customDateString
        , scrshot = req.body.scrshot
        , msgErr = req.body.msgErr
        , msgWarn = req.body.msgWarn
        , msgNotice = req.body.msgNotice
    	, eLevel=[]
    	, engine = req.body.engine
		, output ='string'

		if(typeof engine === 'undefined' || engine ==='') engine = 'htmlcs';
		if(typeof output === 'undefined' || output ==='') output = 'string';

    	log('E N G I N E ', engine);

		if (typeof req.session.userName !== 'undefined') {
			userName = req.session.userName;
			log('Testing logged in session: -> ', userName)
		}
    	if(engine === 'htmlcs'){
	    	if(typeof msgErr !== 'undefined' && msgErr=='true') eLevel.push(1);
	    	if(typeof msgWarn !== 'undefined' && msgWarn=='true') eLevel.push(2);
	    	if(typeof msgNotice !== 'undefined' && msgNotice=='true') eLevel.push(3);

	    	//Default to Error
			if(typeof msgErr === 'undefined' &&  typeof msgWarn === 'undefined' && typeof msgNotice === 'undefined') eLevel.push(1);

			if(typeof scrshot !== 'undefined' && scrshot === 'true')  fs.mkdirSync(dirName);		//Create SCREEN SHOT DIRECTORY

			childArgs = ['--config=config/config.json', path.join(__dirname, 'src/PAET.js')
							, req.body.textURL
							, 'WCAG2AA'
							, userName
							, dirName
							, scrshot
							, eLevel
						];
		}
		if(engine === 'axe'){
			childArgs = ['--config=config/config.json', path.join(__dirname, 'src/axe_url.js'), req.body.textURL, output];
		}	
		if(engine === 'chrome'){
			childArgs = ['--config=config/config.json', path.join(__dirname, 'src/chrome_url.js'), req.body.textURL, output];
		}	
		childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
			res.json({ userName: userName, data: stdout });
			log(stdout);
		});
	});

	app.post('/sniffHTML', function(req, res) {
 		var childArgs
 		, userName = ''
 		, d = new Date()
		, tempFilename = 'tmp/'+ new Date().getTime() + '.html'
		, engine = req.body.engine
		, output ='string'

		if(typeof engine === 'undefined' || engine ==='') engine = 'htmlcs';
		if(typeof output === 'undefined' || output ==='') output = 'string';

		var source = req.body.source;
		source = source.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,'');	//replaces script tags

		log('sniffHTML, E N G I N E ', engine);

		var source = '<!DOCTYPE html><html lang="en"><meta charset="utf-8"><head><title>Home - PayPal Accessibility Tool</title></head><body>'
					+ 	req.body.source
					+ '</body></html>';

		fs.writeFile(tempFilename, source , function (err,data) {
			if (err) throw err;
			if(engine === 'htmlcs'){
				var childArgs = ['--config=config/config.json', path.join(__dirname, 'src/HTMLCS_Run.js'), tempFilename, 'WCAG2AA', '1,2,3', output];
			}
			if(engine === 'axe'){
				var childArgs = ['--config=config/config.json', path.join(__dirname, 'src/axe_url.js'),  tempFilename, output];
			}	 	
			if(engine === 'chrome'){
				var childArgs = ['--config=config/config.json', path.join(__dirname, 'src/chrome_url.js'), tempFilename, output]
			}	 	
	
			childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
				res.json(stdout);
				log(stdout);
				fs.unlink(tempFilename, (err) => {
					if (err) {
						console.log("failed to delete : "+ err);
					} else {
						console.log('successfully deleted ' + tempFilename);                                
					}
				});				
			});
		});		//fs.writeFile
	});

	app.post('/login', function(req, res) {
		var userName= req.body.userName,
			password =req.body.password,
			stageName = req.body.stageName,
			server = req.body.server

			log(userName, password, stageName, server);
			req.session.userName = userName;

		var childArgs1 = ['--config=config/config.json', path.join(__dirname, 'src/login.js'), userName, password, stageName, server]
			childProcess.execFile(binPath, childArgs1, function(err, stdout, stderr) {
			res.json({ userName: userName, data: stdout });
			log(stdout);
		});
	});

	app.get('/logout', function(req, res) {
		if (typeof req.session.userName !== 'undefined'){
				var fs = require('fs');
				fs.unlink(req.session.userName+'.txt', function (err) {
					if (err) throw err;
					log('successfully deleted cookies');
				});
				delete req.session.userName;
			}
			res.redirect('/');	
	});

	app.post('/evaluate', function(req, res) {
		var engine	= req.body.engine;		//Eg htmlcs, chrome, axe 		default:htmlcs
		var output = req.body.output;		// Eg. json, string  		default: string
		var level = req.body.level;			//E.g. WCAG2AA, WCAG2A, WCAG2AAA, Section508 	default:WCAG2AA
		var errLevel = req.body.errLevel;	// Eg. 1,2,3   1 means Error, 2 means Warning, 3 means Notice 	default:1,2,3
		var tempFilename = 'tmp/'+ new Date().getTime() + '.html';

		if(typeof engine === 'undefined' || engine ==='') engine = 'htmlcs';
		if(typeof output === 'undefined' || output ==='') output = 'string';
		if(typeof level === 'undefined' || level ==='') level = 'WCAG2AA';
		if(typeof errLevel === 'undefined' || errLevel ==='') errLevel = '1';

		var source = req.body.source;
		source = source.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,'');	//replaces script tags

		fs.writeFile(tempFilename, source , function (err,data) {
			if (err) throw err;
			if(engine === 'htmlcs'){
				var childArgs = ['--config=config/config.json', path.join(__dirname, 'src/HTMLCS_Run.js'), tempFilename, 'WCAG2AA', errLevel, output];
			}
			if(engine === 'axe'){
				var childArgs = ['--config=config/config.json', path.join(__dirname, 'src/axe_url.js'),  tempFilename, output];
			}	 	
			if(engine === 'chrome'){
				var childArgs = ['--config=config/config.json', path.join(__dirname, 'src/chrome_url.js'), tempFilename, output]
			}
			console.log('E N G I N E ' , engine, childArgs);

			childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
				stdout = stdout.replace('done','');
				res.writeHead(200, { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin":"*" });
				res.write(stdout);
				res.end();
				log(stdout);
				fs.unlink(tempFilename, (err) => {
					if (err) {
						console.log("failed to delete : "+ err);
					} else {
						console.log('successfully deleted ' + tempFilename);                                
					}
				});
			})
		})		
	})