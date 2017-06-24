$(document).ready(function() {
	$('.main [href="?m=administration&p=main"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('input[name="removeJob"]').removeClass('btn-primary').addClass('btn-danger');

	$('.main > .log, .main > form, .main > table').wrap('<div class="table-responsive"/>');
	$('.main th:last-child').attr('colspan', 2);
});
