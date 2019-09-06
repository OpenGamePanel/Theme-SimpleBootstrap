$(document).ready(function() {

	$.ajaxSetup({ cache: false });

	$('form[action="?m=settings&p=themes"] tr:nth-child(4),form[action="?m=settings&p=themes"] tr:nth-child(5)').addClass('hide');
	$('form[action="?m=settings&p=themes"]').attr('enctype','multipart/form-data');

	$.ajax({
		type: "POST",
		url: "themes/SimpleBootstrap/conf/sbs.conf",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		beforeSend: function( xhr ) {
			xhr.overrideMimeType('application/json');
		},
		success: function(json) {

			//console.log(JSON.stringify(json));

			var theme_styles = {'Light':'light', 'Dark':'dark'}
			var add_row = '<tr><td align="right"><label for="style_tab">Theme Style:</label></td><td align="left"><select id="style_tab" name="style_tab" class="form-control">';
                        for (var key in theme_styles) {
                                if(theme_styles[key]==json['style']){
                                        add_row += '<option value="'+theme_styles[key]+'" selected>'+key+'</option>';
                                }else{
                                        add_row += '<option value="'+theme_styles[key]+'">'+key+'</option>';
                                }
                        }
			add_row += '</td><td><i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Changes the Theme Style"></i></td></tr>';
			$('form[action="?m=settings&p=themes"] tr:last').after(add_row);

			var theme_background = {'Light Blur':'light', 'Dark Clean':'dark', 'Fire':'fire', 'Vietnam (by omano)':'vietnam', 'Dream':'dream', 'Light Dream':'light_dream', 'BF3: The Russian':'bf3_the_russian'}
			var add_row = '<tr><td align="right"><label for="style_tab">Theme Background: <a class="label label-primary" id="bg_preview" data-toggle="tooltip" data-original-title="<img src=\'themes/SimpleBootstrap/images/bg/'+json['background']+'.jpg\' width=\'180px\' \>">Preview</a></label></td><td align="left"><select id="style_bg" name="style_bg" class="form-control">';
			for (var key in theme_background) {
				if(theme_background[key]==json['background']){
					add_row += '<option value="'+theme_background[key]+'" selected>'+key+'</option>';
				}else{
					add_row += '<option value="'+theme_background[key]+'">'+key+'</option>';
				}
			}
			add_row += '</td><td><i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Changes the Theme Background"></i></td></tr>';
			$('form[action="?m=settings&p=themes"] tr:last').after(add_row);

			var paces = {'Center Bar':'center-bar', 'Corner Indicator':'corner-indicator', 'Flash':'flash', 'Loading Bar':'loading-bar'};
			var add_row = '<tr><td align="right"><label for="style_loader">Pace Loader</label></td><td align="left"><select id="style_loader" name="style_loader" class="form-control">';
			for (var key in paces) {
				if(paces[key]==json['pace']){
					add_row += '<option value="'+paces[key]+'" selected>'+key+'</option>';
				}else{
					add_row += '<option value="'+paces[key]+'">'+key+'</option>';
				}
			}
			add_row += '</td><td><i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Changes the Pace Load Indicator"></i></td></tr>';

			$('form[action="?m=settings&p=themes"] tr:last').after(add_row);

			if(json['custom_bg']=='no'){
				var custom_bg_info = '<div class="label label-danger show">BG not set</div>';
			}else{
				var custom_bg_info = '<div class="label label-success show">BG set <a class="btn btn-xs btn-danger" id="del_custom_bg"><i class="fa fa-trash" aria-hidden="true"></i></a></div>';
			}

			var upload_input = '\
			<div class="input-group">\
				<label class="input-group-btn">\
					<span class="btn btn-primary">\
						Browse... <input type="file" style="display: none;" name="bg_file" id="bg_file">\
					</span>\
				</label>\
				<input type="text" class="form-control" readonly="">\
			</div>';
			$('form[action="?m=settings&p=themes"] tr:last').after('<tr><td align="right"><label for="custom_bg">Custom BG:'+custom_bg_info+'</label></td><td align="left">'+upload_input+'</td><td><i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Changes the Theme Background to a Custom Image. The Image will be Fixed to 100%/100%!"></i></td></tr>');

                        var dashboard_rows = {'Default':'default', 'Full size Rows':'full_rows', 'Remove First Row (moved Objects into this Row will be hidden)':'remove_one', 'Remove First & Second Row (moved Objects into this Rows will be hidden)':'remove_one_two', 'Remove First & Third Row (moved Objects into this Rows will be hidden)':'remove_one_three'}
                        var add_row = '<tr><td align="right"><label for="style_tab">Dashboard Rows:</label></td><td align="left"><select id="dashboard_rows" name="dashboard_rows" class="form-control">';
                        for (var key in dashboard_rows) {
                                if(dashboard_rows[key]==json['dashboard_rows']){
                                        add_row += '<option value="'+dashboard_rows[key]+'" selected>'+key+'</option>';
                                }else{
                                        add_row += '<option value="'+dashboard_rows[key]+'">'+key+'</option>';
                                }
                        }
                        add_row += '</td><td><i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Changes the Row Style of Game Monitor, Online Servers and Support Boxes at Dashboard"></i></td></tr>';
                        $('form[action="?m=settings&p=themes"] tr:last').after(add_row);

		}
        });

});

$(window).load(function(){
        $('form[action="?m=settings&p=themes"]').submit(function(){
		var formData = new FormData($(this)[0]);
		$.ajax({
			url: 'themes/SimpleBootstrap/conf/sbs_conf.php',
			type: 'POST',
			data: formData,
			async: false,
			success: function (data) {
				console.log(data);
			},
			cache: false,
			contentType: false,
			processData: false
		});

//		return false;
        });

        $('#del_custom_bg').click(function(){
                if(confirm('Are you sure you want to remove the Background Image?')){
                        $.get('themes/SimpleBootstrap/conf/sbs_conf.php',
                                {del_custom_bg:'yes'},
                                function(data){
                                        console.log(data);
                                }
                        );
                        location.reload();
                }
        });

	$('#style_bg').change(function(){
		$('#bg_preview').attr("data-original-title", "<img src='themes/SimpleBootstrap/images/bg/"+$(this).val()+".jpg' width='180px'>");
	});
});

function get_active_loader() {
	var result = null;
	const regex = /url\("pace_(.*).css"\);/g;
	$.ajax({
		url: "themes/SimpleBootstrap/css/pace.css",
		type: 'get',
		dataType: 'html',
		async: false,
		success: function(data) {
			result = regex.exec(data);
		}
	});
	return result[1];
};
