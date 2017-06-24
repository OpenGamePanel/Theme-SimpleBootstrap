$(document).ready(function() {
	$('.main [href="?m=administration&p=main"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main > .log').wrap('<div class="table-responsive"/>');
	$('.main > table').wrap('<div class="table-responsive"/>');
});
