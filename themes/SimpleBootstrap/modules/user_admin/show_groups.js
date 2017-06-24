$(document).ready(function() {
        $('[href^="?m=user_games&p=assign&group_id="]').addClass('btn').addClass('btn-xs').addClass('btn-primary');
	$('[href^="?m=user_admin&p=del_group&group_id="]').addClass('btn').addClass('btn-xs').addClass('btn-danger');

	$('[href^="?m=user_admin&p=del_from_group&group_id="]').addClass('btn').addClass('btn-xs').addClass('btn-danger');

	/* *** Replace UL / LI with Table *** */
	var ul = $(".main ul");
	$(ul).each(function(){
		var li = $(this).find("li");
		var tul = $(this);
		$(li).each(function(){
			$(this).replaceWith('<tr><td>'+$(this).html()+'</td></tr>');
		});
		$(tul).replaceWith('<table>'+$(tul).html()+'</table>');
        });

});

