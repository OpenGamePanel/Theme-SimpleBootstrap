$(document).ready(function() {

	$.ajaxSetup({ cache: false });

	$('form[action="?m=settings&p=themes"] tr:nth-child(4),form[action="?m=settings&p=themes"] tr:nth-child(5)').addClass('hide');
	$('form[action="?m=settings&p=themes"]').attr('enctype','multipart/form-data');

        $.getJSON("themes/SBS/conf/theme.config", function(json) {
                if(json['style']=='light'){
			$('form[action="?m=settings&p=themes"] tr:last').after('<tr><td align="right"><label for="style_tab">Theme Style:</label></td><td align="left"><select id="style_tab" name="style_tab" class="form-control"><option value="dark">dark</option><option value="light" selected>light</option></select></td><td><i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Changes the Theme Style"></i></td></tr>');
                }else{
			$('form[action="?m=settings&p=themes"] tr:last').after('<tr><td align="right"><label for="style_tab">Theme Style:</label></td><td align="left"><select id="style_tab" name="style_tab" class="form-control"><option value="dark" selected>dark</option><option value="light">light</option></select></td><td><i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Changes the Theme Style"></i></td></tr>');
                }

		var paces = {'Center Bar':'center-bar', 'Corner Indicator':'corner-indicator', 'Flash':'flash', 'Loading Bar':'loading-bar'};
		var add_row = '<tr><td align="right"><label for="style_loader">Pace Loader</label></td><td align="left"><select id="style_loader" name="style_loader" class="form-control">';
		for (var key in paces) {
			if(paces[key]==get_active_loader()){
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
					Browse… <input type="file" style="display: none;" name="bg_file" id="bg_file">\
				</span>\
			</label>\
			<input type="text" class="form-control" readonly="">\
		</div>';
		$('form[action="?m=settings&p=themes"] tr:last').after('<tr><td align="right"><label for="custom_bg">Custom BG:'+custom_bg_info+'</label></td><td align="left">'+upload_input+'</td><td><i class="fa fa-question-circle-o" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Changes the Theme Background"></i></td></tr>');
        });

	$('form[action="?m=settings&p=themes"]').submit(function(e){
//		e.preventDefault();
		$.ajax({
			url: "themes/SBS/conf/write_conf.php",
			type: "POST",
			data: new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data){
				console.log(data);
			}
		});

	});

});

$(window).load(function(){
        $('#del_custom_bg').click(function(){
		if(confirm('Are you sure you want to remove the Background Image?')){
			$.get('themes/SBS/conf/write_conf.php',
                        	{del_custom_bg:'yes'},
                        	function(data){
                        	        console.log(data);
                        	}
                	);
                	location.reload();
		}
        });

	$(':file').on('fileselect', function(event, numFiles, label) {
		var input = $(this).parents('.input-group').find(':text'),
		log = numFiles > 1 ? numFiles + ' files selected' : label;
		if(input.length){
			input.val(log);
		}else{
			if(log) alert(log);
		}
	});
});


$(document).on('change', ':file', function() {
	var input = $(this),
	numFiles = input.get(0).files ? input.get(0).files.length : 1,
	label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	input.trigger('fileselect', [numFiles, label]);
});

function get_active_loader() {
	var result = null;
	const regex = /url\("pace_(.*).css"\);/g;
	$.ajax({
		url: "themes/SBS/css/pace.css",
		type: 'get',
		dataType: 'html',
		async: false,
		success: function(data) {
			result = regex.exec(data);
		}
	});
	return result[1];
};

