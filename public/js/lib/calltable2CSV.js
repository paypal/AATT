(function($) {
	var constructOrig = $.fn.tablesorter;
		$.fn.extend({
			tablesorter: function(options) {
				var $headers =$($.find('th'));											
				if ( $headers.length>0 ){											
					$headers[0].setAttribute('tabIndex','0');
					$headers[0].setAttribute('aria-sort','ascending')

					$headers.keydown(function(e) {
						var k = e.which || e.keyCode
							, $this= $(this)

						if (!/(13|32|37|39)/.test(k)) return

						index = $headers.index(this)
						if (k == 37) index--
						if (k == 39) index++

						if(index < 0) index = $headers.length -1
						if(index == $headers.length) index = 0
						if(k == 37 || k === 39){
							this.setAttribute('tabIndex','-1');
							$headers[index].setAttribute('tabIndex','0');
							$headers[index].focus();
						}
						//console.log(this, $headers,  index);
						if( k === 32 || k === 13) {
							$this.click()
							setTimeout(function(){
								if($this.hasClass('headerSortUp')) 	$this.attr('aria-sort','descending')
								if($this.hasClass('headerSortDown')) $this.attr('aria-sort','ascending')
							} , 200)
						}														
					});		
				}								
				constructOrig.apply(this, arguments);
			}  	
		})
})(jQuery);


$(function() {		
	$("#test-results-table").tablesorter({sortList: [[0,0]], headers: {2:{sorter: false}, 3:{sorter: false}, 4:{sorter: false}}});
});	


$("#export").on('click', function (event) {
	$('#test-results-table').table2CSV({delivery:'download'}, event);
});
