$(document).ready(function() {
	$('[href$="&delete"]').addClass('btn').addClass('btn-sm').addClass('btn-danger');

	if(window.location.href.indexOf("home.php?m=config_games&xml_config_creator=Create+XML+Configs") != -1 ){
		$('iframe').attr('id', 'xcc_iframe');
		$('iframe').load(function() {
			$(this).contents().find("body").addClass('xcc_iframe');
			var main_css = '<link rel="stylesheet" type="text/css" href="../../themes/SimpleBootstrap/css/main.css">';
			var bs = '<link rel="stylesheet" href="../../themes/SimpleBootstrap/css/bootstrap.min.css">';
			var bs_t = '<link rel="stylesheet" href="../../themes/SimpleBootstrap/css/bootstrap-theme.min.css">';
			var js = '<link rel="stylesheet" href="../../themes/SimpleBootstrap/js/main.js">';
			var xml_css = '<link rel="stylesheet" type="text/css" href="../../themes/SimpleBootstrap/modules/config_games/main.css">';
			$(this).contents().find("head").append(bs);
			$(this).contents().find("head").append(bs_t);
			$(this).contents().find("head").append(js);
			$(this).contents().find("head").append(main_css);
			$(this).contents().find("head").append(xml_css);

			$(this).contents().find("table").removeAttr("style").removeAttr("colspan").addClass('table').addClass('table-sm').addClass('table-striped');
			$(this).contents().find('button, input[type=button], input[type=submit], input[type=reset], .swfuploadbtn').addClass('btn').addClass('btn-sm').addClass('btn-primary');
			$(this).contents().find('textarea, select, input[type=text]').addClass('form-control').removeAttr('style');
			$(this).contents().find('form').addClass('form-group');



		});
	}
});

