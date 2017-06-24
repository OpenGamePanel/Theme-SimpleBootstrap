$(document).ready(function() {
	$('[href="?m=user_games&p=add"]').addClass('btn').addClass('btn-primary').addClass('btn-sm');
        $('[href^="?m=user_games&p=del&home_id"]').addClass('btn').addClass('btn-danger').addClass('btn-xs');
	$('[href^="?m=user_games&p=edit&home_id"]').addClass('btn').addClass('btn-primary').addClass('btn-xs');
	$('[href^="?m=user_games&p=clone&home_id"]').addClass('btn').addClass('btn-primary').addClass('btn-xs');

	$('[href^="?m=user_games&p="]').each(function() {
		var newContent = $(this).text().replace('[', '').replace(']', '');
        	$(this).text(newContent);
	});
	$('.size').each(function() {
		var newSize = $(this).text().replace('[', '').replace(']', '')
		$(this).text(newSize);
	});
	$('.size').addClass('btn').addClass('btn-xs').addClass('btn-default');

	$('th:last-of-type').css('width', '150px');
	$('tr:last-of-type > td[colspan="2"]').removeAttr('colspan').attr('colspan', 3);
});
