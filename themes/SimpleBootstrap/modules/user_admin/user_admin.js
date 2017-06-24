$(document).ready(function() {
	$('.main [href="?m=user_admin&p=add"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main [href^="?m=user_games&p=assign&user_id="], .main [href^="?m=user_admin&p=edit_user&user_id="]').addClass('btn').addClass('btn-xs').addClass('btn-primary');
	$('.main [href^="?m=user_admin&p=del&user_id="]').addClass('btn').addClass('btn-xs').addClass('btn-danger');

	$('.main style').remove();

});
