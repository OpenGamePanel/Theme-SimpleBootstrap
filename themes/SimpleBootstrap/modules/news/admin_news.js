$(document).ready(function() {
        $('.table-wrap').removeClass('table-wrap');
	$('.news-btn, [href="?m=news&p=admin_news&page=permissions"], .underline-link').addClass('btn').addClass('btn-primary').addClass('btn-sm');
	$('#description').addClass('form-control');

	$(window).load(function () {
		$('.nicEdit-main').css('outline', 'none').parent('div').addClass('form-control').addClass('autoheight').css('padding', '2px');
	});

        create_button('.news-row [href$="&page=permissions"]', 'btn-danger');
        create_button('.news-row [href$="&page=settings"]', 'btn-warning');
        create_button('.news-row [href$="&page=add"]', 'btn-success');

        /* *** Replace UL / LI with Table *** */
        var ul = $(".main ol");
        $(ul).each(function(){
                var li = $(this).find("li");
                var tul = $(this);
                $(li).each(function(){
                        $(this).replaceWith('<tr><td>'+$(this).html()+'</td></tr>');
                });
                $(tul).replaceWith('<table>'+$(tul).html()+'</table>');
        });

        $('[href^="home.php?m=news&p=admin_news&page=edit&id="]').each(function(){
                $(this).replaceWith('<a href="'+$(this).attr('href')+'"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>');
        });

        $('img[src="modules/news/images/cancel.gif"]').parent('a').each(function(){
                $(this).replaceWith('<a href="'+$(this).attr('href')+'" class="btn btn-sm btn-danger pull-right">'+$(this).find('img').attr('alt')+'</a>');
        });

        $('.success').removeClass('success').addClass('label').addClass('label-success');
        $('.failure').removeClass('failure').addClass('label').addClass('label-danger');

	$('.nicEdit-main').addClass('form-control');

	$('.main [href^="home.php?m=news&p=admin_news&page=edit&id="]').addClass('btn').addClass('btn-sm').addClass('btn-primary');
});


function create_button(elem, clss){
        $(elem).each(function(){
                $(this).replaceWith('<a href="'+$(this).attr('href')+'" class="btn btn-sm '+clss+' pull-right">'+$(this).text()+'</a>');
        });

}

