$(document).ready(function(){
        if(window.location.href.indexOf("home.php?m=ftp") != -1 ){
                $('iframe').attr('id', 'ftp_iframe');
                $('iframe').load(function() {
			$(this).contents().find("tr").removeAttr("onmouseover").removeAttr("onmouseout");
                        $(this).contents().find("body").addClass('ftp_iframe');
                        $(this).contents().find("div, input").removeAttr("style");
                        $(this).contents().find("table").removeAttr("style").removeAttr("colspan").addClass('table').addClass('table-sm').addClass('table-striped');
                        $(this).contents().find(".page > table > tbody > tr:nth-child(3)").remove();
			$(this).contents().find('b[style="color:red;"]').removeAttr('style').addClass('alert').addClass('alert-danger');
			$(this).contents().find('.table .table').addClass('inner-table');

                        $(this).contents().find('link').remove();
                        var main_css = '<link rel="stylesheet" type="text/css" href="../../themes/SimpleBootstrap/css/main.css">';
			var ftp_css = '<link rel="stylesheet" type="text/css" href="../../themes/SimpleBootstrap/modules/ftp/main.css">';
			var bs = '<link rel="stylesheet" href="../../themes/SimpleBootstrap/css/bootstrap.min.css">';
			var bs_t = '<link rel="stylesheet" href="../../themes/SimpleBootstrap/css/bootstrap-theme.min.css">';
			var js = '<link rel="stylesheet" href="../../themes/SimpleBootstrap/js/main.js">';
                        $(this).contents().find("head").append(bs);
			//$(this).contents().find("head").append(bs_t);
                        $(this).contents().find("head").append(js);
			$(this).contents().find("head").append(main_css);
			$(this).contents().find("head").append(ftp_css);

			$(this).contents().find('button, input[type=button], input[type=submit], input[type=reset], .swfuploadbtn').addClass('btn').addClass('btn-sm').addClass('btn-primary');
			$(this).contents().find('textarea, select, input[type=text]').addClass('form-control').removeAttr('style');
			$(this).contents().find('form').addClass('form-group');

			$(this).contents().find('.browse_rows_heading a').removeAttr('style').addClass('btn').addClass('btn-xs').addClass('btn-primary');
			$(this).contents().find('[href^="javascript:submitBrowseForm(\'%2F\'"]').addClass('btn').addClass('btn-xs').addClass('btn-primary').prepend('<i class="fa fa-arrow-up" aria-hidden="true"></i>&nbsp;');
			$(this).contents().find('[href^="javascript:submitBrowseForm"]:not(.btn)').addClass('label').addClass('label-default');
			$(this).contents().find('[onclick*="view"] > a').addClass('btn').addClass('btn-xs').addClass('btn-success').addClass('btn-block');
			$(this).contents().find('[onclick*="edit"] > a').addClass('btn').addClass('btn-xs').addClass('btn-warning').addClass('btn-block');
			$(this).contents().find('[href^="javascript:toggleElement(\'upload\')"]').addClass('btn').addClass('btn-xs').addClass('btn-danger');

			$(this).contents().find('img[src$="folder.png"]').replaceWith('<i class="fa fa-folder-open-o" aria-hidden="true"></i>');
			$(this).contents().find('img[src$="txt.png"]').replaceWith('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>');
			$(this).contents().find('img[src$="mime.png"], img[src$="exec.png"]').replaceWith('<i class="fa fa-cog" aria-hidden="true"></i>');
			$(this).contents().find('img[src$="bookmark.png"]').replaceWith('<i class="fa fa-bookmark" aria-hidden="true"></i>');
			$(this).contents().find('img[src$="info.png"]').replaceWith('<i class="fa fa-info-circle" aria-hidden="true"></i>');
			$(this).contents().find('img[src$="exit.png"]').replaceWith('<i class="fa fa-sign-out" aria-hidden="true"></i>');
                        $(this).contents().find('img[src$="view_tree.png"]').replaceWith('<i class="fa fa-list-alt" aria-hidden="true"></i>');
                        $(this).contents().find('img[src$="document.png"]').replaceWith('<i class="fa fa-file-text-o" aria-hidden="true"></i>');
			$(this).contents().find('img[src$="terminal.png"]').replaceWith('<i class="fa fa-terminal" aria-hidden="true"></i>');
			$(this).contents().find('img[src$="colors.png"]').replaceWith('<i class="fa fa-file-image-o" aria-hidden="true"></i>');
			//$(this).contents().find('img[src$="misc.png"]').replaceWith('<i class="fa fa-cog" aria-hidden="true"></i>');
			$(this).contents().find('img[src$="misc.png"]').remove();
			$(this).contents().find('img[src$="back.png"]').replaceWith('<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>');

			$(this).contents().find('[accesskey="h"]').addClass('btn').addClass('btn-warning');
			$(this).contents().find('[accesskey="i"]:not(input)').addClass('btn').addClass('btn-info');
			$(this).contents().find('[accesskey="l"]').addClass('btn').addClass('btn-danger');
			$(this).contents().find('[accesskey="b"]').addClass('btn').addClass('btn-primary');

			$('iframe').contents().find('table h1').each(function(){
				$(this).parent('td').replaceWith('<th>'+$(this).parent('td').html()+'</th>');
			});

			$('iframe').contents().find("body").css('display', 'block');
                });
        }
});
