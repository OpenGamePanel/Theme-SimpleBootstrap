$(document).ready(function(){
	$('.main [href*="&addon_type=config"]').each(function(){
		$(this).addClass('btn').addClass('btn-xs').addClass('btn-success');
		$(this).prepend('<i class="fa fa-puzzle-piece"></i> ');
	});
});
