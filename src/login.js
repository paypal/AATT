var page = new WebPage(),
    testindex = 0,
    loadInProgress = false,
    system = require('system'),
    userName = system.args[1],
    password= system.args[2],
    stageName = system.args[3],
    server = system.args[4],
    fs = require('fs'),
    cookieFile = 'cookies/' + userName+".txt";

    var data = {stageName: stageName, userName: userName, password: password, server:server };

    page.onLoadStarted = function() {
        loadInProgress = true;
        console.log("load started");
    };
 
    page.onLoadFinished = function() {
      loadInProgress = false;
      console.log("load finished");
    };

    function saveCookies(cookieFile) {
        var fs = require("fs");
        fs.write(cookieFile, JSON.stringify(phantom.cookies));
        console.log("Saving cookies: " + JSON.stringify(phantom.cookies));
    }
 
    var steps = [
      function() {
        //Load Login Page
        if(server === 'paypal'){
            stageName = 'https://' + stageName +'/login';
        }

        page.open(stageName, function (status) {        
            if (status !== 'success') {
                console.log('Unable to load the address!', stageName);
                phantom.exit();
            } else {        
                page.render('login.jpg');
            }
        })
    },

    function() {
        page.evaluate(function(data) {
            var userName = data.userName
                , password = data.password

            // inputElements = document.getElementsByTagName("input");
            // inputElements.login_email.value = userName;
            // inputElements.login_password.value = password;

            var loginip = document.getElementById('login_email');
            var passwordip =  document.getElementById('login_password');
            loginip.value = userName;
            passwordip.value = password;
            // console.log(loginip, passwordip);

        }, data);
    }, 
      function() {
            //Login
            page.evaluate(function() {
            var loginForm = document.forms['login_form'];                
              loginForm.submit();
            });
          }, 
      function() {
        page.evaluate(function() {
            // var tagElement = document.getElementById("headline");
            // console.log(tagElement.innerHTML);
        });
        saveCookies(cookieFile);        
      }
    ];
 

    interval = setInterval(function() {
      if (!loadInProgress && typeof steps[testindex] == "function") {
        console.log("step " + (testindex + 1));
        steps[testindex]();
        testindex++;
      }
      if (typeof steps[testindex] != "function") {
        console.log("test complete!");
        phantom.exit();
      }
    }, 50);
