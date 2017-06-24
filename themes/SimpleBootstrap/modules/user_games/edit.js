$(document).ready(function() {
	$('p > a').addClass('btn').addClass('btn-primary').addClass('btn-sm');

	$('[name="change_user_id_main"]').removeClass('btn-primary').addClass('btn-warning');
	$('[href*="&delete_ip&"]').addClass('btn').addClass('btn-xs').addClass('btn-danger');

	$('#mods').bind("DOMSubtreeModified",function(){
		$(this).find('table').addClass('table').addClass('table-sm').addClass('table-striped');
		$(this).find('select').addClass('form-control');
		$(this).find('input[type="text"]').addClass('form-control');
		$(this).find('[href$="&submit=delete_mod"]').addClass('btn').addClass('btn-xs').addClass('btn-danger');
		$(this).find('[href^="?m=user_games&p=install_cmds&home_id="]').addClass('btn').addClass('btn-xs').addClass('btn-primary');
		$(this).find('.set_options').addClass('btn').addClass('btn-sm').addClass('btn-primary');
		$(this).find('input[type="submit"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
		$(this).find('[id^="mod_cfg_id_"] > td').find('br').remove();

	});
});
