$(document).ready(function() {
	$('.main [href="?m=administration&p=main"], [href="javascript:history.go(-1)"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main > .log').wrap('<div class="table-responsive"/>');
	$('.main > table').wrap('<div class="table-responsive"/>');

	$('.hundred td[colspan="6"]').attr('colspan',8);
	$('.hundred th:last-of-type').attr('colspan',2);
});
