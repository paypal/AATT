var page = require('webpage').create(),
	system = require('system'),
	fs = require('fs'),
	
    address  = system.args[1],
	userName = system.args[2],
    scanDir = system.args[3],
    left = parseFloat(system.args[4]),
    top = parseFloat(system.args[5]),
    width = parseFloat(system.args[6]),
    height = parseFloat(system.args[7]),

    screenshot_url ;

	if(userName !== "") {
       var cookieFile = 'cookies/' + userName+".txt";       
	}
	phantom.silent = true;
    page.onConsoleMessage = function (msg) {
        // console.log(msg);
    };
    page.onError = function (msg) {
        // console.log(msg);   
   };

/***************** H E L P E R   F U N C T I O N S *******************/
    function restoreCookies(cookieFile) {
     	var fs = require("fs");

    	if (fs.exists(cookieFile)) {
    		var cookies = fs.read(cookieFile);
    		cookies = JSON.parse(cookies);
    		//console.log("Restored cookies: " + JSON.stringify(cookies));
        	if (cookies.length > 0) {
        			for(var i=0; i<cookies.length; ++i)  {
        				var item = cookies[i];
                        // console.log("Auth token: " + item.name);
        				if (item.expires) 
        					item.expires = Date.parse(item.expires);
        				if (item.expiry)
        					item.expiry = Date.parse(item.expiry);
                        if(item.name==='auth_token') {
                            address+= '&admin_session_redirect_identifier=' + item.value;
                            // address+= '&admin_session_redirect_identifier=U210Vk8BAQAbQWRtaW46OkFkbWluU2Vzc2lvbkNvb2tpZVZPAwAKYXV0aF90b2tlbgEMAIEGR2YxanZ2SnZXV3hLWUxPaGkuVzZJZzdwTWQuSkRnaHNLNEF6MWRkd2tWYmxmRkVobVM5NG5Fd094ZVFlOER0bGZGbTd1VXlYeWVSWGQyWmtjdmh1V09Kdmt6YjlhODRMMzl2VGtVT1BKMzVYUEd3bXZiM1JGZG5GVVdEbk1zTXBGWlEzVHdGRHVtbm9lQVQyTlRMQi4yVDVqUFcub2E4YWg2RU5xeXQuVnBjb0hYYmppSWVNTGVzc3htbzhabEowNUJLRjBJenFGLWFmWmNyV1kxTWFCbDBicEx5eEg5QmJWb1BhTWctMjZyZlNnUFBJLjZMVm1GdEZ3bVR3b1pRR2NOSjgwdwUDAANtYWMBDAAYRUZGOTNCNEYwRjYxMEQxNzVCRDcxNjE3BQMAC2ZpcnN0X2xvZ2luAQwAAAUDAA1tYWNfdGltZXN0YW1wAQwACjEzODYzMTA0MTcFAwAObWFjX2FkbWluX25hbWUBDAADYWxsBQMAC3BvcnRfbnVtYmVyAQwABTE0NzU0BQMAB3VzZXJfaWQBDAAABQI';
                            // address+= '&auth_token=' + item.value;
                        }                                
        				phantom.addCookie(item);
        			}        	
        	}
    		//also tried: phantom.cookies = cookies;
    	}
    }
/***************** E N D   H E L P E R   F U N C T I O N S *******************/    

    if(userName != "") {
        restoreCookies(cookieFile);
    }
    // console.log(address)
    // console.log(typeof left, typeof top, width, height)

    page.open(address, function (status) {        
        if (status !== 'success') {
            console.log('Unable to load the address!');
            phantom.exit();
        } else {
            window.setTimeout(function () {

                // Override onConsoleMessage function for outputting.
                page.onConsoleMessage = function (msg) {
                    if (msg === 'done') phantom.exit();
                    console.log(msg);
                };

                var screenshot = Math.floor((Math.random()*1000)+1) +'.png';
                screenshot_url=  scanDir + '/' + screenshot ;
                page.clipRect = { left: left, top: top, width: width + 100 , height: height + 100 };
                page.render(screenshot_url);

                var htmlStr = '<img src="' + screenshot_url + '">';
                console.log(htmlStr);
                phantom.exit();

            }, 200);
        }//end if
    });//end page.open