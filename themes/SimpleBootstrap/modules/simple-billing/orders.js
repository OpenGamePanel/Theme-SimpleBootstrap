$(document).ready(function() {
	$('.main > style').remove();
	$('.main > h4').each(function(){
		$(this).replaceWith('<div class="alert alert-info">'+$(this).text()+'</div>');
	});
});
