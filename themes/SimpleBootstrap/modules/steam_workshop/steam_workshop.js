$(document).ready(function(){
	$('.main [href^="?m=steam_workshop&p=uninstall"]').addClass('btn').addClass('btn-xs').addClass('btn-danger');
	$('.main [href="?m=steam_workshop&p=main"]').addClass('btn').addClass('btn-xs').addClass('btn-success');
	$('.main [name="install"]').removeClass('btn-primary').addClass('btn-success');
	$('.main [name="remove_mods"]').removeClass('btn-primary').addClass('btn-danger');
	$('.main [href^="?m=steam_workshop&p=main&home_id-mod_id-ip-port="]').addClass('btn').addClass('btn-primary');
});
