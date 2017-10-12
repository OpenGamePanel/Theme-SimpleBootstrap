$(document).ready(function() {
	$('.no_ticket_replies').removeClass('no_ticket_replies').addClass('alert').addClass('alert-danger');

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


});
