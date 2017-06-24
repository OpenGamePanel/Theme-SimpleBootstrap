$(document).ready(function() {
	$('.news-btn').addClass('btn').addClass('btn-primary').addClass('btn-sm');

	$('.pagination b').parent('a').parent('li').addClass('active');

	$('h3 > .failure').parent('h3').each(function(){
		var thtml = $(this).html();
		$(thtml).appendTo('.main');
		$(this).remove();
	});

});
