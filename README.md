AATT
===========================================

Automated Accessibility Testing Tool

What is it?
-------------

This tool is a combination of HTMLCodeSnifer with Express and PhantomJS, which runs on Node. It serves an API to run Accessibility  tests while running QA test. At PayPal we  were able to activate the Selenium Server on Java and with  [NemoJS framework](https://github.com/paypal/nemo "NemoJS"). There is also a Nemo plugin which is to be opensourced soon which will help the integrate the unit tests.

Why do I want it?
-------------

If you automation tests suite in your network and want to test for accessibility along with other tests,  or if you have pages behind firewall for which you can’t use online tools, or if your site is still emerging and confidential and do not want to send the code for evaluation, or want to test the pages behind login screen  then this tool helps you to download and run a NodeJS instance on some server and call the API From you test suite server.  


How do I get it on my website?
-------------

1. NodeJS from http://nodejs.org
2. GIT from http://git-scm.com/downloads

```sh
git clone https://github.paypal.com/accessibility/AATT.git
cd AATT
```

Building and Running
-----------------------

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
AATT has a API for evaluating a HTML Source from other servers. The API EndPoint is: https://your_nodejs_server/evaluate

* Accepts following parameters:
  1. "source" to send the HTML source of the page. It can we be whole page source or partial source 
  2. "priority" to fetch reqults based on issue priorities like P1, P2, Pr or P4. It is a comma-separated value. Eg P1,P2,P3,P4
  3. "ouput" to get jsonified string. E.g. output=json.  If this parameter is not set or left empty,  it will return string with table data that can be parsed or appended directly into your page.

* Set the Request Header Content-type as application/x-www-form-urlencoded

Here is a sample ajax script which would initiate the request:

``` html
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST","http://your_nodejs_server/evaluate",true); 
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("source=" + document.getElementById('source').value + "&priority=" + document.getElementById('priority').value);
```
