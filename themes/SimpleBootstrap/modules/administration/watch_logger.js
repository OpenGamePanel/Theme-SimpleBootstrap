$(document).ready(function() {
	$('table').addClass('table').addClass('table-sm').addClass('table-striped').removeAttr('style');
	var inputs = $('input, textarea, select').not(':input[type=button], :input[type=submit], :input[type=reset], :input[type=radio], :input[type=checkbox], :input[type=image]');
	$(inputs).addClass('form-control').removeAttr('style');

	$('[name="remove_log"]').replaceWith('<button type="submit" class="btn btn-xs btn-danger" name="remove_log" onclick="this.form.submit();"><i class="fa fa-trash" aria-hidden="true"></i></button>');
});
