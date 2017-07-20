$(document).ready(function() {

	$('[name="update"]').click(function(){
		$('body').append('<div class="loading-overlay"><img src="themes/SimpleBootstrap/images/loader/dual_ring.svg"></div>');
	});

        $('.dragbox-content').html(function(index, text) {
                return text.replace(/\ - /g, '');
        });

        $('[href^="#uninstall_"]').addClass('btn').addClass('btn-danger').addClass('btn-xs').removeAttr('style');
        $('[href^="#remove_"]').addClass('btn').addClass('btn-danger').addClass('btn-xs').removeAttr('style');
	$('[href^="#install_"]').addClass('btn').addClass('btn-success').addClass('btn-xs').removeAttr('style');
        $('[href^="?m=extras&searchForUpdates="]').addClass('btn').addClass('btn-primary').addClass('btn-xs').removeAttr('style');

	$('.main > h2').after('<div class="extras"></div>');

	$('.dragbox-content').each(function(){
        	var form_selector = $(this);
        	$(form_selector).prepend('<br>');
        	$(form_selector.find('br')).each(function(){
        	        var $set = $();
        	        var nxt = this.nextSibling;
        	        while(nxt) {
        	                if(!$(nxt).is('br')) {
        	                        $set.push(nxt);
        	                        nxt = nxt.nextSibling;
        	                } else break;
        	        }
        	        $set.wrapAll('<tr><td></td></tr>');
        	});
        	$(form_selector.find('br')).remove();
        	$(form_selector.find('tr')).wrapAll('<table class="table table-sm table-striped" />');

	});


	$('.dragbox').appendTo('.main .extras').removeAttr('style');

	$('tr').each(function () {
		$(this).find('td').each(function () {
			if ($(this).text().trim() == "") {
				$(this).closest("tr").remove();
			};
		});
	});

        $('b[style*="green"]').addClass('label').addClass('label-success').css("color", "");
        $('b[style*="red"]').addClass('label').addClass('label-danger').css("color", "");
	$('b[style*="orange"]').addClass('label').addClass('label-warning').css("color", "");


	$('.search').click(function(){
		$(this).replaceWith('<a class="search btn btn-primary btn-xs" href="'+$(this).attr('href')+'" disabled>'+$(this).text()+' <i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i></a>');
	});

});

