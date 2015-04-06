//Added to check to append http:// 


$('#saveSubmit').click(function() {
			if(!checkUrl($("#stageName").val())) {
				if($("#stageName").val().indexOf("http") == -1){
					$("#stageName").attr('value',"http://" + $("#stageName").val());
					}
					return true;	
				}
			return true;
		});
		
		
		$('#requestURL').submit(function() {
			if(!checkUrl($("#textURL").val())) {
				if($("#textURL").val().indexOf("http") == -1){
					$("#textURL").attr('value',"http://" + $("#textURL").val());
					}
					return true;	
				}
			return true;
		});
		function checkUrl(url){
			var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
				return urlregex.test(url);
		}
		
		if(typeof($("#user") !== 'undefined')){
			if($("#user").val() === ""){
					$("#loginButton").addClass("showLoginButton");
					$("#logoutButton").addClass("hideLogoutButton");
			}
			
			if($("#user").val() !== ""){
					$("#loginButton").addClass("hideLoginButton");
					$("#logoutButton").addClass("showLogoutButton");
			
			}
		
		}