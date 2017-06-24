$(document).ready(function() {
        $('.main [href="http://www.greycube.com/help/readme/lgsl/"]').attr('target', '_blank').addClass('btn').addClass('btn-sm').addClass('btn-primary');
	$('.main [href^="?m=lgsl_with_img_mod&p=lgsl&s="]').addClass('btn').addClass('btn-xs').addClass('btn-warning');

	var first_table = $('.main > form > div > table:nth-child(1)');
	$(first_table).prepend('<thead>').find('tr:first-of-type').appendTo($(first_table).find('thead'));
	$(first_table).find('thead td').each(function(){
		$(this).html($(this).html().replace('[ ','').replace(' ]','')).replaceWith('<th>'+$(this).html()+'</th>');
	});
});

