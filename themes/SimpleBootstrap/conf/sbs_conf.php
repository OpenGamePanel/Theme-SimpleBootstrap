<?php
include("../../../includes/helpers.php");
startSession();

$default_conf_params = array(
	'style' => 'light',
	'background' => 'fire',
	'custom_bg' => 'no',
	'pace' => 'flash',
	'dashboard_rows' => 'default'
);

$pace_loc	= "../css/pace.css";
$css_loc	= "../css/main.css";
$conf_loc       = "./sbs.conf";
$sbs_css_loc	= "./sbs.css";

$debug		= false;	// Set true for Debug in Brower Console

$conf_changes	= false;	// Declaration
$bg_change	= false;	// Declaration
$isadmin	= false;	// Declaration
$conf_params	= array();	// Declaration
$rp		= realpath(dirname(__FILE__));

$files_to_del	= array(
	"../modules/tickets/submitticket.css"
);

if($debug){
	echo "sbs_conf.php loaded...\n";
	echo "POST: ".print_r($_POST, true);
	echo "FILES: ".print_r($_FILES, true);
	echo "GET: ".print_r($_GET, true);
}

if(!file_exists($pace_loc)){
	file_put_contents($pace_loc, '@import url("pace_flash.css");');
	echo "Pace File not found. Created new one.\n";
}
if(!file_exists($conf_loc)){
	file_put_contents($conf_loc, json_encode($conf_params));
	echo "Theme Config not found. Created new one.\n";
	$conf_params = $default_conf_params;
}else{
        $json		= json_decode(file_get_contents($conf_loc));
	$new_param	= false;

	foreach($default_conf_params AS $key => $val)
	{
		if(!isset($json->{$key})){
			$new_param = true;
			$conf_params[$key] = $val;
		}else{
			$conf_params[$key] = $json->{$key};
		}
	}
	if($new_param){
		unlink($conf_loc);
		file_put_contents($conf_loc, json_encode($conf_params));
		echo "New Variable found. Updating Config File.\n";
	}
}
if(!file_exists($sbs_css_loc)){
	preg_match_all("/background-image: url\((.*)\)/", file_get_contents($css_loc), $css_bg);
	file_put_contents($sbs_css_loc, "body {\n\tbackground-image: url(".$css_bg[1][0].") !important;\n}");
	echo "Custom CSS not found. Created new one.\n";
}

if($debug){
        echo "\$conf_params: ".print_r($conf_params, true);
}


/* *** Remove old Config File *** */
if(file_exists("./theme.config")){ unlink("./theme.config"); }

if(isset($_SESSION['users_group']) && $_SESSION['users_group'] == 'admin')
{
	$isadmin = true;

	/* *** Set Custom BG *** */
	$cbgf = $rp.'/custom_bg';
	if(!file_exists($cbgf)){
		mkdir($cbgf, 0744, true);
	}
	if(!empty($_FILES)){
		if($_FILES['bg_file']['error']==0){
			$validextensions = array("jpeg", "jpg", "png");
			$temporary = explode(".", $_FILES["bg_file"]["name"]);
			$file_extension = end($temporary);
			$file_name = 'custom.'.$file_extension;
			$file_complete = $cbgf.'/'.$file_name;
			if ((($_FILES["bg_file"]["type"] == "image/png") || ($_FILES["bg_file"]["type"] == "image/jpg") || ($_FILES["bg_file"]["type"] == "image/jpeg")) && in_array($file_extension, $validextensions)) {
				if ($_FILES["bg_file"]["error"]==0){
					if(file_exists($file_complete)){ unlink($file_complete); }
					move_uploaded_file($_FILES['bg_file']['tmp_name'],$file_complete);
					$conf_changes = true;
					$bg_change = true;
					$conf_params['custom_bg'] = $file_name;
					if($debug){
						echo "Custom BG Uploaded: ".$file_name;
					}
				}
			}
		}
	}

	/* *** Del Custom BG *** */
	if(isset($_GET['del_custom_bg'])){
		if($conf_params['custom_bg']!='no'){
			unlink($cbgf.'/'.$conf_params['custom_bg']);
			$conf_changes = true;
			$conf_params['custom_bg'] = 'no';
			preg_match_all("/background-image: url\((.*)\)/", file_get_contents($css_loc), $css_bg);
			file_put_contents($sbs_css_loc, "body {\n\tbackground-image: url(".$css_bg[1][0].") !important;\n}");
			if($debug){
				echo "Custom BG Deleted.\n";
			}
		}
	}

	/* *** Pace Loader *** */
	if(isset($_POST['style_loader'])){
		if($_POST['style_loader']!=$conf_params['pace']){
			$conf_changes = true;
			$conf_params['pace'] = $_POST['style_loader'];
			if(file_exists($pace_loc)){ unlink($pace_loc); }
			file_put_contents($pace_loc, '@import url("pace_'.$_POST['style_loader'].'.css");');
			if($debug){
				echo "Style Loader Changed into: ".$_POST['style_loader']."\n";
			}
		}
	}

	/* *** General Save via Theme Settings *** */
	if(isset($_POST['style_tab']))
	{
		if($_POST['style_tab']!=$conf_params['style'])
		{
			$conf_changes = true;
			$conf_params['style'] = $_POST['style_tab'];
			file_put_contents(
				$css_loc,
				preg_replace(
					"/\/\* \*\*\* THEME STYLER \*\*\* \*\/(.*)\/\* \*\*\* THEME STYLER END \*\*\* \*\//s",
					"/* *** THEME STYLER *** */\n".file_get_contents("../css/main_".$_POST['style_tab'].".css")."\n/* *** THEME STYLER END *** */",
					file_get_contents($css_loc)
				)
			);
			if($debug){
				echo "Style changed into: ".$_POST['style_tab']."\n";
				echo "Put ../css/main_".$conf_params['style'].".css into ".$css_loc."\n";
			}
		}
	}

	/* *** Set Dashboard Rows *** */
	if(isset($_POST['dashboard_rows']))
	{
		if($_POST['dashboard_rows']!=$conf_params['dashboard_rows'])
		{
			$conf_changes = true;
			$conf_params['dashboard_rows'] = $_POST['dashboard_rows'];
			if($debug){
				echo "Dashboard Rows changed into: ".$_POST['dashboard_rows']."\n";
			}
		}
	}
}

if($conf_params['custom_bg']!='no')
{
	change_bg("../conf/custom_bg/".$conf_params['custom_bg']);
}else
{
	if(isset($_POST['style_bg']) && $isadmin)
	{
		if($_POST['style_bg']!=$conf_params['background']){
			$conf_changes = true;
			$conf_params['background'] = $_POST['style_bg'];
		}
	}
	change_bg("../images/bg/".$conf_params['background'].".jpg");
}

if($conf_changes)
{
	unlink($conf_loc);
	file_put_contents($conf_loc, json_encode($conf_params));
	if($debug){
		echo "Found Changes. Rewrote Config File.\n";
	}
}

// Delete All Files defined in Array (Cleanup)
foreach($files_to_del AS $fd)
{
	if(file_exists($fd))
	{
		unlink($fd);
		if($debug){
			echo "File successfully Deleted: ".$fd."\n";
		}
	}
}

function change_bg($bg_path)
{
	Global $sbs_css_loc, $debug, $bg_change;

	if(strpos(file_get_contents($sbs_css_loc), $bg_path)===false Or $bg_change)
	{
		file_put_contents($sbs_css_loc, preg_replace("/background-image: url\((.*)\)/", "background-image: url(".$bg_path.")", file_get_contents($sbs_css_loc)));
		if($debug){
			echo "BG has been changed to: ".$bg_path.". Replaced it in ".$sbs_css_loc."\n";
		}
	}
}
