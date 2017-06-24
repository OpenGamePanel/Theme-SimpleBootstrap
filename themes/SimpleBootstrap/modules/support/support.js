$(document).ready(function() {
        $('.contactForm').each(function(){
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

});
