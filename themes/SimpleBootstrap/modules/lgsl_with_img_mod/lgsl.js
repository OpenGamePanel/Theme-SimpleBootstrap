$(document).ready(function() {
	$('.main [href="http://www.greycube.com"], .main [href="http://cgx24.com/"]').attr('target', '_blank').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main br').remove();
	$('.main [href="?m=lgsl_with_img_mod&p=lgsl"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');

	$('img[src$="icon_details.gif"]').replaceWith('<i class="fa fa-search" aria-hidden="true"></i>');
	$('.main [href^="?m=lgsl_with_img_mod&p=lgsl&s="]').addClass('btn').addClass('btn-xs').addClass('btn-primary');

	$('.main [title="GAME LINK"] > a').addClass('label').addClass('label-primary').addClass('label-size');
});
