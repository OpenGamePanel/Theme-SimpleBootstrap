$(document).ready(function() {
	$('img[src$="edit.png"]').replaceWith('<i class="fa fa-pencil-square-o" aria-hidden="true"></i>');
	$('img[src$="refresh.png"]').replaceWith('<i class="fa fa-refresh" aria-hidden="true"></i>');

        $('[name="stopvServer"]').removeClass('btn-primary').addClass('btn-danger');

	$('.edit, .main [href^="home.php?m=TS3Admin"], .main [href*="home.php?m=TS3Admin&token"], .main [href="home.php?m=TS3Admin&liveview"]').addClass('btn').addClass('btn-xs').addClass('btn-primary');

	$('.propHeadline').parent('td').each(function(){
		$(this).replaceWith('<th colspan="'+$(this).attr('colspan')+'">'+$(this).html()+'</th>');
	});
	$('.table .table0').each(function(){
		$(this).replaceWith('<th>'+$(this).html()+'</th>');
	});

	$('#serverview').css('padding','5px').wrap('<table class="table table-sm table-striped">');
	$('#serverstatus').parent('td').children('a').addClass('label').addClass('label-primary').addClass('label-size');

	$('#clearLink').parent('div').each(function(){
		$(this).find('img').remove();
		$(this).html($(this).html().replace('|',''));
	});

});

