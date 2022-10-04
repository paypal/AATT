# Automated Accessibility Testing Tool (AATT)

Browser-based accessibility testing tools and plugins require manually testing each page, one at a time. Tools that can crawl a website can only scan pages that do not require login credentials, and that are not behind a firewall. Instead of developing, testing, and using a separate accessibility test suite, you can now integrate accessibility testing into your existing automation test suite using AATT.

AATT tests web applications regarding conformance to the Web Content Accessibility Guidelines (WCAG) 2.1 (for axe engine).

AATT provides an accessibility API and custom web application for [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/), [Axe](https://github.com/dequelabs/axe-core) and [Chrome developer tool](https://github.com/GoogleChrome/accessibility-developer-tools).  Using the AATT web application, you can configure test server configurations inside the firewall, and test individual pages.

AATT includes [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/), [Axe](https://github.com/dequelabs/axe-core) and [Chrome developer tool](https://github.com/GoogleChrome/accessibility-developer-tools) with Express and PhantomJS, which runs on Node.

For example, it can be used to test Java web applications using [SeLion](https://github.com/paypal/selion/) automation test frameworks.

For node applications, it can be integrated into [NemoJS testing framework](https://github.com/paypal/nemo)  to run accessibility testing during automated unit testing .For Nemo framework use [Nemo-Accessibility plugin] (https://github.com/paypal/nemo-accessibility)


## Set up

```sh
$ git clone https://github.com/paypal/AATT.git
$ cd AATT
$ npm i
$ DEBUG=AATT* http_port=3000 node app.js . (If you want to run in Debug mode printing logs)
```
$sudo node app.js will run in default port 80 without printing log information

You can now access the running instance of AATT from http://localhost:3000

## Integration with AATT API
AATT provides an API for evaluating HTML Source code from other servers. The API EndPoint is: https://your_nodejs_server/evaluate

* Accepts the following OPTIONAL parameters:
  1. "source" to send the HTML source of the page. Can be a whole page or partial page source. Defaults to document
  2. "engine" E.g. engine=htmlcs. This is the engine which will scan the code. It accepts a single value of "axe", chrome" or "htmlcs". Defaults to axe
  3. "ouput" to get the jsonified string. E.g. output=json.  If this parameter is not set or left empty, it will return a string with table data that can be parsed or appended directly into your page. Defaults to json.

  4. "errLevel" Error level like Error, Warning or Notices .  Mapped to 1, 2 and 3 respectively. E.g. "1,2,3" . (For HTMLCS engine)
  5. "level" This option applies only for the default htmlcs evaluation engine. Options can be either of the following WCAG2AA, WCAG2A, WCAG2AAA, Section508  . Defaults to "WCAG2AA" (For HTMLCS engine)


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

## How to Use with nightwatchJS
[Nightwatch JS](http://nightwatchjs.org ) is another UI automated testing framework powered by Node.js and uses the Selenium WebDriver API. To call AATT, you need to use the [request module](https://github.com/request/request). NightwatchJs has call back functions like before and after hooks that would be called before or after executing a test case. Request to AATT API should be done in after hook passing the source code of the page to the API.  Here is an [example commit](https://github.com/mpnkhan/nightwatch/commit/a377e860e0bfbd21d9e365e86fb3e6c4ec0e63f0)  on how to do this with Nightwatch.

## How to use as a node module

The AATT evaluate function can be used directly as a node module, without the
need for using a web API.

### Installation

Add the module to your project

```sh
npm install --save aatt
```

### Usage Example

This takes the same options as the web `/evaluate` HTTP endpoint.

```javascript
const { evaluate } = require('aatt');

evaluate({
    source: "<html xml:lang='en-gb'><head><title>Foo</title></head><body><p>Bar</p></body></html>",
    output: "json",
    engine: "htmlcs",
    level: "WCAG2A"
}).then(result => {
    console.log('Results', JSON.parse(result));
});
```

## Copyright and License

Copyright 2021, PayPal under [the BSD license](LICENSE.md).

[1]: https://yourhostname/evaluate "AATT api"

## Contributors
 - Prem Nawaz Khan,  developer || [https://github.com/mpnkhan](https://github.com/mpnkhan) || [@mpnkhan](https://twitter.com/mpnkhan)
 - Cathy O'Connor, design || [@cagocon](https://twitter.com/cagocon)
 - Srinivasu Chakravarthula, user interaction, testing || @csrinivasu

## Feedback
We welcome your feedback. Please file issues and/or enhancement requests.
