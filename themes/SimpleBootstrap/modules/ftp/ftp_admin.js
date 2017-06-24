$(window).load(function(){
	$('.tablesorter-hasChildRow td.collapsed').html('<i class="fa fa-plus-square-o" aria-hidden="true"></i>');
	$('.tablesorter-hasChildRow td.collapsed').click(function(){
		$(this).html('<i class="fa fa-minus-square-o" aria-hidden="true"></i>');
	});
        $('.tablesorter-hasChildRow td.expanded').click(function(){
		$(this).html('<i class="fa fa-plus-square-o" aria-hidden="true"></i>');
        });
});
