$(document).ready(function() {
	$('.main [href="?m=server"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main [href$="&delete&y=y"]').addClass('btn').addClass('btn-sm').addClass('btn-danger');

	$('[name="remove_ip"]').removeClass('btn-primary').addClass('btn-danger');
});
