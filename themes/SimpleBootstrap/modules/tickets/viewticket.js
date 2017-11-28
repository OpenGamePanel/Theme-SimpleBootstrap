$(document).ready(function() {
	$('.no_ticket_replies, .ticket_closed').removeClass('no_ticket_replies').addClass('alert').addClass('alert-danger');
	$('[name="ticket_close"]').removeClass('btn-primary').addClass('btn-danger');

	$('.ticket_reply_notice').addClass('btn').addClass('btn-primary');
	$('.downloadAttachmentLink').addClass('label').addClass('label-default');

	$('.divTableCell').each(function(){
		$(this).replaceWith('<td>'+$(this).html()+'</td>');
	});
	$('.divTableRow').each(function(){
		$(this).replaceWith('<tr>'+$(this).html()+'</tr>');
	});
	$('.divTableBody').each(function(){
		$(this).replaceWith('<tbody>'+$(this).html()+'</tbody>');
	});
	$('.divTable').each(function(){
		$(this).replaceWith('<table>'+$(this).html()+'</table>');
	});

	$('.attachment_header').each(function(){
		$(this).replaceWith('<div class="attachment_header"><h3>'+$(this).html()+'</h3></div>');
	});

	$('.ticketErrorHolder').addClass('alert').addClass('alert-danger');
});

$(window).load(function(){
	$('#errorHeader').replaceWith(function(){
		return $("<strong />", {html: $(this).html()});
	});
});
