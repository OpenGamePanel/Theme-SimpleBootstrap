$(document).ready(function() {
	$('li.faqblock > a').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.accordion-content').each(function(){
		$(this).css('display','none');
	});
});
