$(document).ready(function() {
	$('[href="?m=tickets&p=submitticket"]').addClass('btn').addClass('btn-primary').addClass('btn-sm');
	$('.no_tickets').removeClass('no_tickets').addClass('alert').addClass('alert-danger');

	$('.ticket_admin_response > td:nth-child(2)').each(function(){
		$(this).replaceWith('<td><span class="label label-warning label-size">'+$(this).html()+'</span></td>');
	});
	$('.ticket_customer_response > td:nth-child(2)').each(function(){
		$(this).replaceWith('<td><span class="label label-info label-size">'+$(this).html()+'</span></td>');
	});
	$('.ticket_closed > td:nth-child(2)').each(function(){
		$(this).replaceWith('<td><span class="label label-danger label-size">'+$(this).html()+'</span></td>');
	});

});

