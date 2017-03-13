# Automated Accessibility Testing Tool (AATT)

Browser-based accessibility testing tools and plugins require manually testing each page, one at a time. Tools that can crawl a website can only scan pages that do not require login credentials, and that are not behind a firewall. Instead of developing, testing, and using a separate accessibility test suite, you can now integrate accessibility testing into your existing automation test suite using AATT.
 
AATT tests web applications regarding conformance to the Web Content Accessibility Guidelines (WCAG) 2.0. 
Find a list of the WCAG 2.0 rules checked by HTMLCS Engine on the [HTML CodeSniffer WCAG Standard Summary](http://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/) page and Chrome Engine on the [Google Chrome Developer Audit rules](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules).
AATT provides an accessibility API and custom web application for [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/), [Axe](https://github.com/dequelabs/axe-core) and [Chrome developer tool](https://github.com/GoogleChrome/accessibility-developer-tools).  Using the AATT web application, you can configure test server configurations inside the firewall, and test individual pages.

AATT includes [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/), [Axe](https://github.com/dequelabs/axe-core) and [Chrome developer tool](https://github.com/GoogleChrome/accessibility-developer-tools) with Express and PhantomJS, which runs on Node. 

For example, it can be used to test Java web applications using [SeLion](https://github.com/paypal/selion/) automation test frameworks. 

For node applications, it can be integrated into [NemoJS testing framework](https://github.com/paypal/nemo)  to run accessibility testing during automated unit testing .For Nemo framework use [Nemo-Accessibility plugin] (https://github.com/paypal/nemo-accessibility)



## Set up


1. NodeJS from http://nodejs.org
2. GIT from http://git-scm.com/downloads

```sh
$ git clone https://github.com/paypal/AATT.git
$ cd AATT
```

## Building and Running

```sh
$ sudo npm install
$ git submodule init
$ git submodule update
$ DEBUG=AATT* http_port=3000 node app.js
```

You can now access the running instance of AATT from http://localhost:3000
*Note*: if you get "access" errors from Node, please make sure to shut down your Apache server by running the following from the command line:

```sh
$ sudo apachectl stop
```

## Integration with AATT API
AATT provides an API for evaluating HTML Source code from other servers. The API EndPoint is: https://your_nodejs_server/evaluate

* Accepts the following parameters:
  1. "source" to send the HTML source of the page. Can be a whole page or partial page source 
  2. "engine" E.g. engine=htmlcs. This is the engine which will scan the code. It accepts a single value of "axe", chrome" or "htmlcs". 
  3. "ouput" to get the jsonified string. E.g. output=json.  If this parameter is not set or left empty, it will return a string with table data that can be parsed or appended directly into your page.
  Default to "htmlcs"
  4. "errLevel" Error level like Error, Warning or Notices .  Mapped to 1, 2 and 3 respectively. E.g. "1,2,3"
  5. "level" This option applies only for the default htmlcs evaluation engine. Options can be either of the following WCAG2AA, WCAG2A, WCAG2AAA, Section508  . Defaults to "WCAG2A"

    
* Set the Request Header Content-type as application/x-www-form-urlencoded

## Example
 
Here is a sample ajax script which would initiate the request:

``` html
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST","http://your_nodejs_server/evaluate",true); 
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("source=" + document.getElementById('source').value + "&priority=" + document.getElementById('priority').value);

```
## How to Use with nemo-accessibility as a plugin

[Nemo](https://github.com/paypal/nemo) is a node.js based automation framework for browser automation. It's plugin-architecture helps switch on/off different capabilities. The [nemo-accessibility](https://github.com/paypal/nemo-accessibility) plugin performs accessibility scanning while running browser automation using [Nemo framework](https://github.com/paypal/nemo).

 [Learn more about nemo](https://github.com/paypal/nemo)

`nemo-accessibility` plugin uses the AATT accessibility API to evaluate HTML source. Therefore you must specify the API url under as a plugin argument like below.

 ```json
   "nemo-accessibility":{
        "module":"nemo-accessibility",
        "arguments": ["https://your_nodejs_accessibility_server/evaluate"]
    }
 ```
Once `nemo-accessibility` plugin is registered, you should now have `nemo.accessibility` namespace available in your tests. `nemo.accessibility` exposes a method called `scan` to help you run accessibility evaluation against your page/element. `scan` method takes an _optional_ object like below,

```javascript
  var options = {
    'element': driver.findElement(wd.tagName('iframe')), //default is entire page
    'engine': 'axe', 'htmlcs' or 'chrome', //default is htmlcs    
    'output': 'html' or 'json', //default is html,
    'level': 'WCAG2AA' or 'WCAG2A' or  'WCAG2AAA' //option applies to htmlcs only and default to WCAG2AA
    'errLevel' : '1,2,3'   // for htmlcs only, 1 means Error, 2 means Warning, 3 means Notice  default:1,2,3

 }
```

`scan` method returns a promise with resulting `HTML` or `json` response from [AATT api][1] when fulfilled. You can then write the HTML to a file or parse JSON response for later reporting. For example,

``` javascript
   nemo.driver.get('http://www.yahoo.com');
   nemo.accessibility.scan().then(function (result) {
     fs.writeFile('report/accessibilityResult.html', result, function (err) {
           done();
     });
   });
```

You could also run accessibility scan on a _certain_ _element_ like below. This is useful when lets say you scanned an entire page already, and subsequently a certain automated test interaction opened a dialog box; you can now only scan newly opened dialog box since you already scanned the rest of the page before.

Here is a  [example](https://github.com/paypal/nemo-accessibility/blob/master/example/dynamicpage.js), (note this example uses excellent [nemo-view](https://github.com/paypal/nemo-view) plugin for finding elements)

```javascript
  it('will run scan on an element', function (done) {
        nemo.driver.get('http://www.paypal.com');
        var options = {
            'source': 'btnDonate',
            'engine' : 'htmlcs',
            'errLevel': '1,2,3'

        };        
        nemo.accessibility.scan(options).then(function (result) {
            fs.writeFile('report/entirePage.html',result,function (err) {
               done();
            });
        });
        var welcomePage = nemo.view.welcomePage;
        welcomePage.buttonThatOpensAPopup().click();
        var element = welcomePage.popup(),
            options = {
                'element': element,
                'engine' : 'axe',
                'errLevel': '1,2,3'
            };
        nemo.accessibility.scan(options).then(function (result) {
            fs.writeFile('report/scanAnElement.html', result, function (err) {
                done();
            });
        });
    });
```
For more details, please refer to: [nemo-accessibility plugin](https://github.com/paypal/nemo-accessibility)

## How to Use with nightwatchJS
[Nightwatch JS](http://nightwatchjs.org ) is another UI automated testing framework powered by Node.js and uses the Selenium WebDriver API. To call AATT, you need to use the [request module](https://github.com/request/request). NightwatchJs has call back functions like before and after hooks that would be called before or after executing a test case. Request to AATT API should be done in after hook passing the source code of the page to the API.  Here is an [example commit](https://github.com/mpnkhan/nightwatch/commit/a377e860e0bfbd21d9e365e86fb3e6c4ec0e63f0)  on how to do this with Nightwatch. 

## How to Use the AATT web application 
 
The AATT web application can be used to test HTML code snippets or pages. To test logged in pages on a test server, first configure the login credentials in AATT which creates a cookied experience. Then, enter the url for the page you want to test. 
Results are displayed as a table that can be exported as a CSV file.
Results include:  
* WCAG 2.0 principle: Perceivable, Operable, Understandable or Robust 
* Error description
* code snippet
* WCAG 2.0 techniques to help developers fix the issue. 

Optionally, you can configure the tool to save a screensnap of the html page you test. You can also configure the tool to display only errors, or also to include warnings and notices. Warning and notices require manual inspection to determine the severity of the warning or notice.

## Copyright and License

Copyright 2016, PayPal under [the BSD license](LICENSE.md).

[1]: https://yourhostname/evaluate "AATT api"

## Contributors
 - Prem Nawaz Khan,  developer || [https://github.com/mpnkhan](https://github.com/mpnkhan) || [@mpnkhan](https://twitter.com/mpnkhan)
 - Cathy O'Connor, design || [@cagocon](https://twitter.com/cagocon)
 - Nilesh Kulkarni ,  developer for nemo accessibility plugin ||[https://github.com/nikulkarni](https://github.com/nikulkarni)
 - Srinivasu Chakravarthula, user interaction, testing || @csrinivasu

## Feedback
We welcome your feedback. Please file issues and/or enhancement requests.

