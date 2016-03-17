var HTMLCS_RUNNER = new function() {
    this.run = function(standard, screenshot_url, errLevel) {

 	HTMLCS.process(standard, document, function() {
		var msgs = HTMLCS.getMessages();
		var content = "";
		var heading = "";
		var type = '';
		var outerHTML = '';

		// console.log('errLevel' , errLevel);

		try {
				var principles = {
						'Principle1': 'Perceivable',
						'Principle2': 'Operable',
						'Principle3': 'Understandable',
						'Principle4': 'Robust'
					};
					content += '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title>HTMLCodeSniffer Results</title></head><style>table, th, td {border: 1px solid red;}</style><body>';

					if (msgs.length === 0) {
						// resultsWrapper.innerHTML = '<span class="no-violations">No violations found</span>';
						console.log('No violations found');
						return;
						}

					content += '<table id="test-results-table" class="tablesorter"><thead><tr>';
					if(standard=='Section508') content += '<th>Message</th><th>Rule</th>';
					else content += '<th>Error Level</th><th>Principle</th><th>Message</th><th>Code snippet</th><th>Techniques</th>';
					content += '</thead></tr><tbody>';

					var errors   = 0;
					var warnings = 0;
					var notices  = 0;
					var count=1;
					
					for (var i = 0; i < msgs.length; i++) {
						var msg = msgs[i];
						if(errLevel.indexOf(msg.type) !=-1 ) {
							switch (msg.type) {
								case HTMLCS.ERROR:
								type = 'Error';
								errors += 1;
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
							
							msgParts.shift();
							msgParts.unshift('[Standard]');
						}		
								var noStdMsgParts = msgParts.join('.');
						
							content += '<tr class="' + type.toLowerCase() + '">';

							if(standard !=='Section508'){
								content += '<td  class="number"><span class="flag">' + type.toLowerCase() + '</span></td>';

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

								count++
							}

						if(standard=='Section508'){
							errors += 1;
							content += '<td class="messageText"> ' + msg.msg + '</td>';
							content += '<td class="messageTechniques"><a href="http://www.section508.gov/content/learn/standards/quick-reference-guide#1194.22">' + principle + '</a></td>';
						}	

						content += '</tr>';

					 }	//if errLevel		
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