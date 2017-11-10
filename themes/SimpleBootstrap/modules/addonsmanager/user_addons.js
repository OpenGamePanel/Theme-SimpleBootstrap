$(document).ready(function(){
	$('.main > table').before('<div class="addons"></div>');
	$('.main td').contents().appendTo('.addons');
	$('.main > table').remove();
	$('.main [href*="&addon_type="]').addClass('btn-primary').wrapInner('<span>');
});
