$(document).ready(function() {
        $('#servermonitor [href$="&delete"], #servermonitor [href$="&remove_db').addClass('btn').addClass('btn-xs').addClass('btn-danger');
        $('#servermonitor [href$="&edit"], #servermonitor [href$="&assign"], #servermonitor [href$="&edit_db_settings"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');

        $('#servermonitor .success').addClass('label').addClass('label-success').removeClass('success');
        $('#servermonitor .failure').addClass('label').addClass('label-danger').removeClass('failure');

});

