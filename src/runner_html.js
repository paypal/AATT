var strPrty = 'P1,P2,P3,P4';
var HTMLCS_RUNNER = new function() {
	this.prty='';
    this.run = function(standard, screenshot_url, prty) {

    if(prty != 'undefined') {
    	strPrty = prty;
    }
    	
 	HTMLCS.process(standard, document, function() {
		var msgs = HTMLCS.getMessages();
		var content = "";
		var heading = "";
		var type = '';
		var outerHTML = '';
		var prtyArr = strPrty.split(',');

		// console.log('P R I O R I T Y -> ' + prtyArr.toString());

		try {
				var principles = {
						'Principle1': 'Perceivable',
						'Principle2': 'Operable',
						'Principle3': 'Understandable',
						'Principle4': 'Robust'
					};
					
					content += '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title>Evaluate</title></head><style>table, th, td {border: 1px solid red;}</style><body>';

					if (msgs.length === 0) {
						// resultsWrapper.innerHTML = '<span class="no-violations">No violations found</span>';
						console.log('No violations found');
						return;
						}
/*
					content += '<link href="https://paet.corp.ebay.com/css/lib/bootstrap.min.css" rel="stylesheet">';
					content += '<link href="https://paet.corp.ebay.com/css/lib/bootstrap-accessibility.css" rel="stylesheet">';
					content += '<link rel="stylesheet" type="text/css" media="print" href="https://paet.corp.ebay.com/css/home-print.css">';
					content += '<link rel="stylesheet" type="text/css" href="https://paet.corp.ebay.com/css/home.css">';																								
*/					
					content += '<table id="test-results-table" class="tablesorter"><thead><tr>';
					if(standard=='Section508') content += '<th>Message</th><th>Rule</th>';
					else content += '<th>Principle</th><th>Message</th><th>Code snippet</th><th>Techniques</th>';
					content += '</thead></tr><tbody>';

					var errors   = 0;
					var warnings = 0;
					var notices  = 0;
					var count=1;
					for (var i = 0; i < msgs.length; i++) {
						var msg = msgs[i];
						switch (msg.type) {
							case HTMLCS.ERROR:
							type = 'Error';
							// errors += 1;
							break;
							case HTMLCS.WARNING:
								type = 'Warning';
								warnings++;
							break;

							case HTMLCS.NOTICE:
								type = 'Notice';
								notices++;
							break;

							default:
								type = 'Unknown';
							break;
												
						}

					 	if (msg.element.innerHTML && msg.element.innerHTML.length > 50) {
							var outerHTML = msg.element.outerHTML.replace(msg.element.innerHTML, msg.element.innerHTML.substr(0, 50) + '...');
						} else {
							var outerHTML = msg.element.outerHTML;
						}
						// Get the success criterion so we can provide a link.
						var msgParts   = msg.code.split('.');						
						if(standard=='Section508'){
							// var msgParts  = code.split('.', 3);
					        var paragraph     = msgParts[1].toLowerCase();
					        var principle = [
					            ['Section', '1194.22 (' + paragraph + ')']
					        ];					       
				        }else{
					        					
							var principle  = msgParts[1];
							var sc         = msgParts[3].split('_').slice(0, 3).join('_');
							var techniques = msgParts[4];
							techniques     = techniques.split(',');
							var priority;
							
							switch(principles[principle]){
								case "Robust":
									priority = "P4";
									break;
								case "Understandable":
									priority = "P3";
									break;
								case "Operable":
									priority = "P2";
									break;
								case "Perceivable":
									priority = "P1";
									break;
							}

									//Build our own filter different from HTMLCodeSniffer
					                if(techniques.indexOf('G18')!='-1')  priority='P2';         //Issue #25 drop color contrast issue priority to P2                                                                            
					                															// With current logic all Perceivable are P1 and color contrast is perceivable can't change guideline
					                // if(techniques.indexOf('H91')!='-1')  priority='P4';                                                                              
																		
									// Build a message code without the standard name.
									msgParts.shift();
									msgParts.unshift('[Standard]');
						}		
								var noStdMsgParts = msgParts.join('.');
						
						 // console.log('P R I O R I T Y -> ' + prtyArr.indexOf(priority));
						if(type !== "Warning" &&  type !== "Notice" && prtyArr.indexOf(priority) !=-1 ) {		//&& prtyArr.indexOf(priority) === 0
							errors += 1;
							content += '<tr class="' + type.toLowerCase() + '">';
							// content += '<td  class="number"><span class="flag">'+priority+'</span></td>';
							content += '<td  class="messagePrinciple">';
							content += '<a href="http://www.w3.org/TR/WCAG20/#' + principles[principle].toLowerCase() + '" target="_blank">' + principles[principle] + '</a>';
							content += '</td>';
							
							content += '<td class="messageText"> ' + msg.msg + '</td>';
							content += '<td>' +  splitLine(outerHTML.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'), 30) + '</td>';
							content += '<td class="messageTechniques"><ul>';

							for (var j = 0; j < techniques.length; j++) {
								content += '<li><a href="http://www.w3.org/TR/WCAG20-TECHS/' + techniques[j] + '" target="_blank">' + techniques[j] + '</a></li>';
							}

							content += '</ul></td>';
							content += '</tr>';
							count++
						}
						if(standard=='Section508'){
							errors += 1;
							content += '<td class="messageText"> ' + msg.msg + '</td>';
							content += '<td class="messageTechniques"> ' + principle + '</td>';							
						}	
							
					} //Closing for loop
					if(errors === 0) {
						content += '<tr><td colspan="5"> ----  No Errors ---  </td></tr>';
					}

					var address = document.location.href;
					if(address.indexOf("file:") === -1){
						heading += '<h4>' + address +'</h4>';
						heading += '<div style="margin-left:10px">Screenshot: &nbsp;<a href="/' + screenshot_url +'"> ' + screenshot_url + '</div>';									
					}

					heading += '<ul id="results-overview">';
					heading += '<li class="active"><span class="result-count result-count-errors">' + errors + '</span> <span class="result-type">errors</span></a></li></ul>';

					heading +='<a href="#" class="button-link" id="export" style="margin-top:42px">Export as CSV</a><br/><br/>';

					content  = content + heading;		
					content += '</tbody></table>';
					content += '</body></html>';

			} catch (e) {
					console.log('Error:', e.toString());
			}
/*
			content += '<script src="https://paet.corp.ebay.com/js/lib/jquery.js"></script>';
			content += '<script src="https://paet.corp.ebay.com/js/lib/__jquery.tablesorter.js"></script>';
			content += '<script src="https://paet.corp.ebay.com/js/lib/table2CSV.js"></script>';
			content += '<script src="https://paet.corp.ebay.com/js/lib/calltable2CSV.js"></script>';
*/
			console.log(content);
			console.log('done');

		});
	};
		
};

//Break the code snippet into multiple lines.
function splitLine(st,n) {
		var b = ''; 
		var s = st;while (s.length > n) {
			var c = s.substring(0,n);
			var d = c.lastIndexOf(' ');
			var e =c.lastIndexOf('\n');
		if (e != -1)
		d = e; 
		if (d == -1) 
		d = n;
		b += c.substring(0,d) + '\n';
		s = s.substring(d+1);
		}
		
		return b+s;
	}