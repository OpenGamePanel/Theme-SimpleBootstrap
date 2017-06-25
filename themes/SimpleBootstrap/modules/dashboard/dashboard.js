$(document).ready(function() {
	$('.online_servers td').each(function(){
		$(this).addClass('btn-primary').html($(this).children());
	});

	$('.one_fourth').addClass('col-xs-12').addClass('col-md-3');
	$('.one_two').addClass('col-xs-12').addClass('col-md-6');

	$('.dragbox-content img').remove();

	$('.bloc > div > br').remove();

	var url = "themes/SimpleBootstrap/js/radialIndicator.js";
	$.getScript( url, function() {
		animateProgressBars();
	});
});

function animateProgressBars(){
	$(".progress-bar").each(function() {
		var value = $(this).attr("data");
		$(this).radialIndicator({
			barColor: '#1997c6',
			percentage: true,
			roundCorner: true,
			initValue: value
		});
	});

	/*$('#column4:nth-child(1)').addClass('col-xs-12').addClass('col-md-8').removeAttr('style');
	$('#column4:nth-child(2)').addClass('col-xs-12').addClass('col-md-6').removeAttr('style');
	$('#column4:nth-child(3)').addClass('col-xs-12').addClass('col-md-6').removeAttr('style');
	$('#column4:nth-child(4), #column4:nth-child(5)').addClass('col-xs-12').addClass('col-md-12').removeAttr('style');
*/

	$('.dragbox-content b').each(function() {
		$('<cutter></cutter>').insertBefore(this);
	});
	$('.dragbox-content cutter').each(function() {
		var $set = $();
		var nxt = this.nextSibling;
		while (nxt) {
			if (!$(nxt).is('cutter')) {
				$set.push(nxt);
				nxt = nxt.nextSibling;
			} else break;
		}
		$set.wrapAll('<div class="load-container"/>');
	});

	$('.dragbox-content cutter').remove();

	$('.dragbox-content .load-container').each(function() {
		var this_b = $(this).children('b');
		var this_progress = $(this).children('.progress');
		$(this_b).insertAfter(this_progress);
	});

	/* *** Only Storage *** */
	$('#column4:nth-child(4) .load-container').addClass('storage');
	$('.storage br:first-of-type').replaceWith(' / ');

	/* *** Only CPU Cutting *** */
	$('#column4:nth-child(2) .load-container').addClass('cpu_load');
	$('.cpu_load br').remove();
	$('.cpu_load').each(function() {
		var this_b = $(this).children('b');
		$(this_b).text($(this_b).html().split(':')[0]);
	});
}

