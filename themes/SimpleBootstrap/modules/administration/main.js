$(document).ready(function(){
        /* *** Administration Button - Removing all TD/TR *** */
        $('.main').prepend('<table class="administration-table table table-sm"><tbody><tr><td><div class="flex-container"></div></td></tr></table>');
        $('.main').prepend('<h2>'+$('.main h2:nth-of-type(1)').html()+'</h2>');
        $('.main .administration-table:nth-of-type(2) td:not(.administration-buttons-hmargin)').each(function() {
                $('.flex-container').append($(this).html());
        });
        $('.main h2:nth-of-type(2)').remove();
        $('.main .administration-table:nth-of-type(2)').remove();

	$('.main .administration-table [href^="?m=administration&p=iframe&external_link="]').addClass('btn-primary').addClass('admin-buttons');
	$('.main .administration-table [href^="?m=administration&p=iframe&external_link="]').wrapInner('<div></div>');

	$('.main button[name="restore"]').removeClass('btn-primary').addClass('btn-danger');

	/* *** Buttons Order adding TR's *** */
	var td = $('.main > table:last-of-type td');
	var width = $(window).width();

	if(width >= 1025){
	        var cutter = 5;
	}else if(width <= 1024 && width >= 769){
		var cutter = 4;
	}else if(width <= 768 && width >= 481){
	        var cutter = 3;
	}else if(width <= 480 && width >= 321){
	        var cutter = 2;
	}else if(width <= 320){
	        var cutter = 1;
	}

	td.each(function(i){
		$(this).removeAttr('colspan');
		if (i % cutter == 0) {
			td.slice(i, i+cutter).wrapAll('<tr/>')
		}
	}).parent('tr').unwrap();
	$('.main > table:last-of-type tr').each(function(){
		if($.trim($(this).html())=='') { $(this).remove(); }
	});
	var td_cnt = $('.main > table:last-of-type tr:last-of-type td').length;
	var col_diff = cutter - td_cnt + 1;
	$('.main > table:last-of-type tr:last-of-type td:last-of-type').attr('colspan', col_diff);

	$('.main > table:last-of-type form').remove();
	$('.main > table:last-of-type').wrap('<form method="POST" \>');

});

