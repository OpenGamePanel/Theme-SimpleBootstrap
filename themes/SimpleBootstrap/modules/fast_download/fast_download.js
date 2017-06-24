$(document).ready(function() {
	$('.main [href^="?m=fast_download"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('input[name="delete"], input[name="stop_fastdl"]').removeClass('btn-primary').addClass('btn-danger');


	var form_selector = $('.main > form:nth-child(5)');
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
