$(document).ready(function() {

	/* *** Check if Config File exists, and if not, Call write_conf.php to create it *** */
	$.get('themes/SimpleBootstrap/conf/theme.config').fail(function(){
		$.get('themes/SimpleBootstrap/conf/write_conf.php',
			{create_config:'yes'},
			function(data){
				console.log(data);
			}
		);
	});

	/* *** Cutting Title *** */
	$('.logo h2').text($('.logo h2').text().substring(0, $('.logo h2').text().lastIndexOf(" [") + 1));

	/* *** Remove CSS and JS Files *** */
	$('link[href="css/global.css"]').remove();
	$('link[href="js/bootstrap/css/bootstrap-combined.min.css"]').remove();

	/* *** Removing Chars from Links *** */
        $('a, a span').each(function(){
                $(this).html($(this).html().replace('[','').replace(']',''));
        });

	/* *** Several Class and Style Stuff *** */
	$(window).load(function () {
		$('tr, td, div:not([class*="nicEdit"])').css("background-color", "");
		$('div:not([class*="nicEdit"], #refreshed-0)').css("border", "").css("height", "");
		$('input').css("width", "");
		if($.trim($("div").text()) == "") {
			$(this).remove();
		}

	});

        $('table .first_row > td').each(function(){
                $(this).replaceWith('<th>'+$(this).html()+'</th>');
        });

	$('.magnificContentsDiv').bind("DOMSubtreeModified",function(){
		$('.updateLink').attr('disabled','disabled').addClass('form-control').css('display','inline-block');
		$('.copyButton').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	});

	if(window.location.href.indexOf("home.php?m=litefm&home_id=") > -1) {
		$('input[type="file"]').each(function(){
			$(this).css('display', 'none');
			$(this).wrap('<div class="input-group">').wrap('<label class="input-group-btn">').wrap('<span class="btn btn-sm btn-primary btn-file">');
			$(this).parent('span').parent('label').parent('.input-group').append('<input type="text" class="form-control" readonly="">');
			$(this).parent('span').prepend('Browse...');
		});
		$(document).on('change', ':file', function() {
			var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});
		$(':file').on('fileselect', function(event, numFiles, label) {
			var input = $(this).parents('.input-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
			if( input.length ) {
				input.val(log);
			} else {
				if( log ) alert(log);
			}
		});
	}

	$('.main .redirectLink').prepend('<i class="fa fa-arrow-right" aria-hidden="true"></i> ');

	var inputs = $('input, textarea, select').not('input[type=button], input[type="submit"], input[type="SUBMIT"], input[type=reset], input[type=radio], input[type=checkbox], input[type=image], input[type="file"]');
	$(inputs).addClass('form-control').removeAttr('style');
	var buttons = $('button, input[type="button"], input[type="submit"], input[type="SUBMIT"], input[type="reset"], .redirectLink, [href^="?m=gamemanager&p=update&update=refresh"], .main [href="?m=modulemanager&p=update"], .main [href="?m=simple-billing&p=shop"], .main [href^="home.php?m=TS3Admin&changevServer"], .main [href^="?m=gamemanager&p=game_monitor&home_id="], .serverIdToggle');
	$(buttons).addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main [href^="?m=modulemanager&p=del&id="]').addClass('btn').addClass('btn-xs').addClass('btn-danger');
	$('.main [href^="?m=modulemanager&p=add&module="]').addClass('btn').addClass('btn-xs').addClass('btn-success');

	$('em').each(function(){
		$(this).replaceWith('<div class="label label-warning inline-block">'+$(this).html()+'</div>');
	});

	$('.monitorbutton, .administration-buttons').addClass('btn-primary');
	$('.administration-buttons').removeClass('administration-buttons').addClass('admin-buttons');
	$('form').addClass('form-group').css('float', '');
	$('.main #search').parent('form').css('margin-bottom', '10px');
	$('table').addClass('table').addClass('table-sm').addClass('table-striped').removeAttr('style');
	$('tfoot, input').removeAttr('style');
	$('tfoot .bloc').removeClass('bloc');
	$('.main input[name="remove"], .main input[name="removeJob"]').removeClass('btn-primary').addClass('btn-danger');

	$('.online').addClass('label').addClass('label-success').addClass('label-size');
	$('.offline').addClass('label').addClass('label-danger').addClass('label-size');
        $('.success').addClass('alert').addClass('alert-success');
	$('td b.success').removeClass('alert').removeClass('alert-success');
        $('.failure:not(b)').addClass('alert').addClass('alert-danger');

	$('img[src="modules/addonsmanager/loading.gif"]').replaceWith('<i class="fa fa-spinner fa-pulse fa-3x fa-fw loadinggif"></i>');
	$('img[src="images/online.png"], img[src$="icon_online.gif"]').replaceWith('<i class="fa fa-circle online" aria-hidden="true"></i>');
	$('img[src="images/offline.png"], img[src$="icon_offline.gif"]').replaceWith('<i class="fa fa-circle offline" aria-hidden="true"></i>');

	$('.main img, .main input[type="image"]').error(function () {
		$(this).unbind("error").attr("src", "themes/SimpleBootstrap/images/image_not_found.png").removeAttr('height');
	});


	/* *** MENU *** */
	$('.menu ul[id^=submenu] span').each(function() {
		var img_url = $(this).attr('data-icon_path');
		$(this).before("<img src='"+img_url+"'/>");
	});

	$('.menu [class$="menu_link_selected"]').addClass('ready').addClass('btn-primary').next('ul').addClass('opened').parent('li').addClass('active');
	$('.menu a').next('ul').parent('li').addClass('tree');

	$('.menu a').click(function () {
		$(this).parent('li').addClass('active');
		if($(this).parent('li').has('ul').length){
			if($(this).next('ul').hasClass('opened')){
				$(this).next('ul').removeClass('opened');
			}else{
				$(this).next('ul').addClass('opened');
				if($(this).hasClass('ready')){
					return true;
				}else{
					$(this).addClass('ready').addClass('btn-primary');
					return false;
				}
			}
		}
	});


        /* *** Pagination *** */
        $('#pagination').each(function(){
                $(this).replaceWith('<ul class="pagination">'+$(this).html()+'</ul>');
                var pm = $('.pagination');

                var ps = $(pm).find('.watchLogger_paginationStart');
                var pp = $(pm).find('.watchLogger_paginationPages');
                var pe = $(pm).find('.watchLogger_paginationEnd');

                if($(ps).length){
                        if($(ps).find('span').length){ console.log('divider!'); }
                        $(ps).find('a').each(function(){
                                var tl = $(this).attr('href');
                                var tc = $(this).text();
                                $(pm).append('<li><span><a href="'+tl+'">'+tc+'</a></li>');
                        });
                        if($(ps).find('span').length){
                                $(pm).append('<li><span><a>...</a></span></li>');
                        }
                        $(ps).remove();
                }
                $(pp).find('a').each(function(){
                        var tl = $(this).attr('href');
                        var tc = $(this).text().replace('[','').replace(']','');
                        if($(this).hasClass('watchLogger_currentPageLink')){
                                $(pm).append('<li class="active"><span><a href="'+tl+'">'+tc+'</a></li>');
                        }else{
                                $(pm).append('<li><span><a href="'+tl+'">'+tc+'</a></li>');
                        }
                });
                $(pp).remove();

                if($(pe).length){
                        if($(pe).find('span').length){
                                $(pm).append('<li><span><a>...</a></span></li>');
                        }
                        $(pe).find('a').each(function(){
                                var tl = $(this).attr('href');
                                var tc = $(this).text();
                                $(pm).append('<li><span><a href="'+tl+'">'+tc+'</a></li>');
                        });
                        $(pe).remove();
                }

        });


	/* *** Removing CSS File from FTP Page *** */
	if(window.location.href.indexOf("home.php?m=TS3Admin") != -1 ){
		$('link[href="modules/TS3Admin/webinterface.css"]').remove();
	}


	/* *** Tooltip *** */
	$(window).load(function(){
		$('.image-tip').each(function(){
			var tip_text = $(this).find('.tip').text();
			$(this).replaceWith('<i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="'+tip_text+'"></i>');
		});
		$('[data-toggle="tooltip"]').each(function(){
			$(this).tooltip({
				animated: 'fade',
				html: true
			});
		});
	});


        /* *** Login Page Mod *** */
	if(/^(\/|\/index\.php)$/i.test(location.pathname)){

		if($('form[name="login_form"]').length > 0) {
	                if ($('.g-recaptcha').length > 0) {
	                        var recaptcha_pubkey = $('.g-recaptcha').attr('data-sitekey');
				var recaptcha = "<div class='text-center'><script src='//www.google.com/recaptcha/api.js'></script><div style='display: inline-block;' class='g-recaptcha' data-sitekey='"+recaptcha_pubkey+"' data-theme='dark'></div></div>";
	                }else{
	                        var recaptcha = "";
	                }

        	        var title = $('.main h4').text();
        	        var user = $('[name="login_form"] tr:nth-child(2) td:first-child').text().replace(':', '');
        	        var pass = $('[name="login_form"] tr:nth-child(3) td:first-child').text().replace(':', '');
        	        var forgot = $('[href="?m=lostpwd"]').text();
        	        var lbtn = $('[name="login"]').val();
        	        var optns = $('[name="lang"]').html();

	                var new_form = '\
			<div class="login-container">\
	        		<h3>'+title+'</h3>\
        			<form action="index.php" name="login_form" method="post" class="form-group">\
        			        <input type="text" name="ulogin" id="ulogin" class="form-control" placeholder="'+user+'">\
					<input type="password" name="upassword" class="form-control" placeholder="'+pass+'">\
        	        		<select name="lang" onchange="this.form.submit();" class="form-control">'+optns+'</select>\
					'+recaptcha+'\
        	        		<input type="submit" name="login" value="'+lbtn+'" class="btn btn-primary btn-block btn-sm">\
        			</form>\
        			<a href="?m=lostpwd">'+forgot+'</a>\
			</div>';

	                $('.main').empty().html(new_form);
		}

		/* *** Lost Password Form *** */
		if(window.location.href.indexOf('?m=lostpwd') > -1) {
			//alert('bla');

			var title = $('.main h2').text();

			if ($('.main > strong').length > 0) {
				/* *** Error Message *** */

				var err = $('.main strong').text();
	                        var err_msg = $('.main p').text();

				var new_form = '\
       	                	<div class="login-container">\
	                                <h3>'+title+'</h3>\
					<div class="alert alert-danger" role="alert"><strong>'+err+'</strong><p>'+err_msg+'</p></div>\
					<a href="?m=lostpwd" class="btn btn-primary btn-sm"><< Back</a>\
	                        </div>';
			}else if ($('.main > p > b[style="color:red;"]').length > 0) {
				/* *** Sent Password *** */

				var msgb = $('.main > p > b[style="color:red;"]').text();
				$('.main > p > b[style="color:red;"]').remove();
				var msg = $('.main > p').text();

                                var new_form = '\
                                <div class="login-container">\
                                        <h3>'+title+'</h3>\
                                        <div class="alert alert-success" role="alert"><p>'+msg+'</p><p>'+msgb+'</p></div>\
                                        <a href="?m=lostpwd" class="btn btn-primary btn-sm"><< Back</a>\
                                </div>';
			}else{

				if ($('.main td > p').length > 0) {
					if($('.main td > p').attr('style')=='color: red;'){
						var alert = '<div class="alert alert-danger" role="alert">';
					}else{
						var alert = '<div class="alert alert-success" role="alert">';
					}
					$('.main td > p').each(function() {
						alert += '<p>'+$(this).text()+'</p>';
					});
					alert += '</div>';
				} else {
					var alert = "";
				}

			var email = $('.main label[for="email_address"]').text();
                        var lbtn = $('td > [type="submit"]').val();
                        var bbtn = $('[action="index.php"] > input[type="submit"]').val();

                        var new_form = '\
                        <div class="login-container">\
                                <h3>'+title+'</h3>\
				'+alert+'\
                                <form action="?m=lostpwd" method="post" class="form-group">\
					<input type="text" name="email_address" class="form-control" placeholder="Email">\
                                        <input type="submit" name="login" value="'+lbtn+'" class="btn btn-primary btn-block btn-sm">\
                                </form>\
				<a href="index.php" class="btn btn-primary btn-sm">'+bbtn+'</a>\
                        </div>';

			}
			$('.main').empty().html(new_form);
		}


		$('.main').removeClass('col-md-10').addClass('col-md-12');

		$('nav.navbar').addClass('navbar-default');
		$('#navbar ul').addClass('nav').addClass('navbar-nav');
		$('#navbar [class*="selected"]').parent('li').addClass('active');

		$('.navigation').removeClass('col-md-2').addClass('col-md-12').css('padding-right','15px')
		$('.collapse').css('padding','0px 5px');
		$('.menu').css('margin-bottom','0px');
		$('body > .container-fluid > .row:first-of-type').remove();

        }



});

$(window).load(function(){
	$("body > .container-fluid").fadeIn(50);

        $(':file').on('fileselect', function(event, numFiles, label) {
                var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;
                if(input.length){
                        input.val(log);
                }else{
                        if(log) alert(log);
                }
        });
});


$(document).on('change', ':file', function() {
        var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
});

