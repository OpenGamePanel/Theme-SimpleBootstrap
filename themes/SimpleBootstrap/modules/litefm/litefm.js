$(document).ready(function() {

	$('.operations-button').addClass('btn').addClass('btn-xs').addClass('btn-primary');
	$('.main [href^="?m=gamemanager&p=game_monitor&home_id="]').addClass('btn').addClass('btn-primary').addClass('btn-sm');

	$('img[src="images/folder.png"]').replaceWith('<i class="fa fa-folder-open-o" aria-hidden="true"></i>');
	$('img[src="images/txt.png"]').replaceWith('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>');
        $('img[src="images/exec.png"]').replaceWith('<i class="fa fa-cog" aria-hidden="true"></i>');

	$('.unlocked').children('span').addClass('btn').addClass('btn-xs').addClass('btn-danger').css('min-width','80px');
	$('.locked').children('span').addClass('btn').addClass('btn-xs').addClass('btn-success').css('min-width','80px');

	$('[href*="&item="], [href^="javascript:downloadFile"]').addClass('label').addClass('label-default');
	$('[href$="&p=read_file"]').removeClass('label').removeClass('label-default').addClass('btn').addClass('btn-primary').addClass('btn-xs');
});

