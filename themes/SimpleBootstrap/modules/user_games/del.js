$(document).ready(function(){
	$('.main > p:nth-child(1)').replaceWith('<div class="alert alert-warning" role="alert">'+$('.main > p:nth-child(1)').html()+'</div>');
	$('.main > p:nth-child(2)').replaceWith('<table class="table table-sm table-striped"><tr><td>'+$('.main > p:nth-child(2)').html()+'</td></table>');
	$('.main td').each(function(){
                $(this).html($(this).html().replace('|',''));
        });


	$('.main [href$="&files=y"], .main [href^="?m=user_games&p=del&y=y&home_id="]').addClass('btn').addClass('btn-sm').addClass('btn-danger');
	$('.main [href="?m=user_games"]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
});
