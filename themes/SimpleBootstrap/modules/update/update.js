$(document).ready(function() {
	$('.main [href="?m=update&p=blacklist"], .main [href*="commits"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main [href*="commit"]:not([href*="commits"])').addClass('label').addClass('label-primary');

	$('.main ul > br').remove();
	$('.main ul').addClass('list-group');
	$('.main li').addClass('list-group-item');
});
