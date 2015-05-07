# Automated Accessibility Testing Tool (AATT)

Browser-based accessibility testing tools and plugins require manually testing each page, one at a time. Tools that can crawl a website can only scan pages that that do not require login credentials, and that are not behind a firewall. Instead of developing, testing, and using a separate accessibility test suite, you can now integrate accessibility testing into your existing automation test suite using AATT.
 
AATT tests web applications for conformance to the Web Content Accessibility Guidelines (WCAG) 2.0. Find a list of the WCAG 2.0 rules checked on the [HTML CodeSniffer WCAG Standard Summary](http://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/) page.
AATT provides an accessibility API and custom web application for [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/).  Using the AATT web application, you can configure test server configurations inside the firewall, and test individual pages.

AATT includes HTMLCodeSniffer with Express and PhantomJS, which runs on Node. 

For example, it can be used to test Java web applications using [SeLion](https://github.com/paypal/selion/) automation test frameworks. 

For node applications, it can be integrated into [NemoJS testing framework](https://github.com/paypal/nemo)  to run accessibility testing during automated unit testing .



## Set up


1. NodeJS from http://nodejs.org
2. GIT from http://git-scm.com/downloads

```sh
git clone https://github.com/paypal/AATT.git
cd AATT
```

## Building and Running

```sh
sudo npm install
git submodule init
git submodule update
$ node app.js
```

You can now access the running instance of AATT from https://localhost
*Note*: if you get "access" errors from Node, please make sure to shut down your Apache server by running the following from the command line:

```sh
$ sudo apachectl stop
```

## Integration with AATT API
AATT has an APIfor evaluating HTML Source code from other servers. The API EndPoint is: https://your_nodejs_server/evaluate

* Accepts the following parameters:
  1. "source" to send the HTML source of the page. Can be a whole page or partial page source 
  2. "priority" to fetch reqults based on issue priorities like P1, P2, Pr or P4. It is a comma-separated value. Eg P1,P2,P3,P4
  3. "ouput" to get the jsonified string. E.g. output=json.  If this parameter is not set or left empty, it will return a string with table data that can be parsed or appended directly into your page.

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

[Nemo](https://github.com/paypal/nemo) is a node.js based automation framework for browser automation. It's plugin-architecture helps switch on/off different capabilities. The nemo-accessibility plugin performs accessibility scanning while running browser automation using [Nemo framework](https://github.com/paypal/nemo).

 [Learn more about nemo](https://github.com/paypal/nemo)

`nemo-accessibility` plugin uses the AATT accessibility API to evaluate HTML source. Therefore you must specify the API url under `nemoData` like below.

 ```json
    "nemoData": {
       "accessibilityApiUrl" : "https://your_nodejs_server/evaluate"
    }
 ```
Once `nemo-accessibility` plugin is registered, you should now have `nemo.accessibility` object available. `nemo.accessibility` exposes a method called `scan` to help you run accessibility evaluation against your page. `scan` method takes an _optional_ object like below,

```javascript
 var options = {
    'priority': 'P1' or ['P1','P2','P3'], //expects either a string or an array; default is ALL priorities
    'element': nemo.drivex.find({'locator':'iframe','type':'tagName'}), //default is entire page
    'output': 'html' or 'json' //default is html
 }
```

`scan` method returns a promise with resulting `HTML` or `json` response from [PAET api][1] when fulfilled. You can then write the HTML to a file or parse JSON response for later reporting. For example,

``` javascript
   nemo.driver.get('http://www.yahoo.com');
   nemo.accessibility.scan().then(function (result) {
     fs.writeFile('test/functional/report/accessibility.html', result, function (err) {
                 done();
     });
   });
```
You could also pass a certain element to run the scan. This is useful particularly when you already scanned an entire page, and the nemo test opened a dialog box; you can now scan just the newly opened dialog box since you already scanned the rest of the page before.

```javascript
  it('will run scan on an element', function (done) {
        nemo.driver.get('http://www.paypal.com');
        var element = nemo.driver.findElement(nemo.wd.By.tagName('video')),
            options = {
                'priority': ['P1', 'P2'],
                'element': element
            };
        nemo.accessibility.scan(options).then(function (result) {
            fs.writeFile('test/functional/report/scanAnElement.html', result, function (err) {
                done();
            });
        });
    });
```
For more details, please refer to: [nemo-accessibility plugin](https://github.com/paypal/nemo-accessibility)

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

Copyright 2015, eBay Software Foundation under [the BSD license](LICENSE.md).

## Contributors
 - Prem Nawaz Khan,  developer || [https://github.com/mpnkhan](https://github.com/mpnkhan) || [@mpnkhan](https://twitter.com/mpnkhan)
 - Cathy O'Connor, design || [@cagocon](https://twitter.com/cagocon)
 - Nilesh Kulkarni ,  developer for nemo accessibility plugin ||[https://github.com/nikulkarni](https://github.com/nikulkarni)
 - Srinivasu Chakravarthula, user interaction, testing || @csrinivasu

## Feedback
We welcome your feedback. Please file issues and/or enhancement requests.

