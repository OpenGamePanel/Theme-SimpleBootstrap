$(document).ready(function() {
        $('.main [href="?m=update"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');

        $('img[src="images/folder.png"]').replaceWith('<i class="fa fa-folder-open-o" aria-hidden="true"></i>');
        $('img[src="images/txt.png"]').replaceWith('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>');

});

