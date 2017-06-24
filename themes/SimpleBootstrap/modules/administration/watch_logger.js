$(document).ready(function() {
	$('table').addClass('table').addClass('table-sm').addClass('table-striped').removeAttr('style');
	var inputs = $('input, textarea, select').not(':input[type=button], :input[type=submit], :input[type=reset], :input[type=radio], :input[type=checkbox], :input[type=image]');
	$(inputs).addClass('form-control').removeAttr('style');
});
