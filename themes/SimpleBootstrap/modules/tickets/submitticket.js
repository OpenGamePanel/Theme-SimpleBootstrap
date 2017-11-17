$(document).ready(function() {
	var counter = 0;
	 $('form > .ticket_elementDiv').each(function(){
		$(this).removeClass('ticket_elementDiv').addClass('input-group');

		$(this).find('label').replaceWith('<span class="input-group-addon" id="addon'+counter+'">'+$(this).find('label').text()+'</span>');
		$(this).find('input').attr('aria-describedby','addon'+counter);

		counter = counter+1;
	});

	$('.attachment_header').each(function(){
		$(this).replaceWith('<h3>'+$(this).html()+'</h3>');
	});

});
