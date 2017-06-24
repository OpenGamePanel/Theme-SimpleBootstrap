$(document).ready(function() {
        $('.main [href="?m=server"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('input[name="reset_firewall"]').removeClass('btn-primary').addClass('btn-danger');

	$('.main [href$="ch_fw_status=disable"]').addClass('btn').addClass('btn-sm').addClass('btn-danger');
	$('.main [href$="ch_fw_status=enable"]').addClass('btn').addClass('btn-sm').addClass('btn-success');

});
