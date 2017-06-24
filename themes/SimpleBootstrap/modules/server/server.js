$(document).ready(function() {
	$('#servermonitor [href$="&delete"]').addClass('btn').addClass('btn-xs').addClass('btn-danger');
	$('#servermonitor [href$="&edit"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');
        $('#servermonitor [href^="?m=server&p=reboot"]').addClass('btn').addClass('btn-xs').addClass('btn-warning');
        $('#servermonitor [href^="?m=server&p=restart"]').addClass('btn').addClass('btn-xs').addClass('btn-warning');
        $('#servermonitor [href^="?m=server&p=log"], #servermonitor [href^="?m=server&p=firewall"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');

	$('#servermonitor .success').addClass('label').addClass('label-success').removeClass('success');
	$('#servermonitor .failure').addClass('label').addClass('label-danger').removeClass('failure');

	$('#servermonitor img[src="images/magnifglass.png"]').each(function(){
		$(this).replaceWith('<span data-toggle="tooltip" class="image-tooltip" title="<img src=\''+$(this).attr('data-url')+'\' />"><i class="fa fa-search" aria-hidden="true"></i></span>');
	});
});
