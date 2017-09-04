<?php
include("../../../includes/helpers.php");
startSession();

$conf_params = array(
	'style' => 'light',
	'custom_bg' => 'no',
	'pace' => 'flash'
);

$pace_loc	= "../css/pace.css";
$css_loc	= "../css/main.css";
$conf_loc       = "./sbs.conf";
$sbs_css_loc	= "./sbs.css";

$debug		= 0;	// Set to 1 for Debug in Brower Console
$conf_changes	= 0;	// Declaration
$bg_change	= 0;	// Declaration
$rp		= realpath(dirname(__FILE__));

if($debug==1){
	echo "sbs_conf.php loaded...\n";
	echo "POST: ".print_r($_POST, true);
	echo "FILES: ".print_r($_FILES, true);
}

if(!file_exists($pace_loc)){
	file_put_contents($pace_loc, '@import url("pace_flash.css");');
	echo "Pace File not found. Created new one.\n";
}
if(!file_exists($conf_loc)){
	file_put_contents($conf_loc, json_encode($conf_params));
	echo "Theme Config not found. Created new one.\n";
}else{
        $json                           = json_decode(file_get_contents($conf_loc));
        $conf_params['style']           = $json->{"style"};
        $conf_params['custom_bg']       = $json->{"custom_bg"};
        $conf_params['pace']            = $json->{"pace"};
}
if(!file_exists($sbs_css_loc)){
	preg_match_all("/background-image: url\((.*)\)/", file_get_contents($css_loc), $css_bg);
	file_put_contents($sbs_css_loc, "body {\n\tbackground-image: url(".$css_bg[1][0].") !important;\n}");
	echo "Custom CSS not found. Created new one.\n";
}

/* *** Remove old Config Fles *** */
if(file_exists("./theme.config")){ unlink("./theme.config"); }
if(file_exists("./write_conf.php")){ unlink("./write_conf.php"); }

if(isset($_SESSION['users_group']) && $_SESSION['users_group'] == 'admin')
{
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
					$conf_changes = 1;
					$bg_change = 1;
					$conf_params['custom_bg'] = $file_name;
					if($debug==1){
						echo "Custom BG Uploaded: ".$file_name;
					}
				}
			}
		}
	}

	/* *** Del Custom BG *** */
	if(!empty($_GET['del_custom_bg'])){
		if($conf_params['custom_bg']!='no'){
			unlink($cbgf.'/'.$conf_params['custom_bg']);
			$conf_changes = 1;
			$conf_params['custom_bg'] = 'no';
			preg_match_all("/background-image: url\((.*)\)/", file_get_contents($css_loc), $css_bg);
			file_put_contents($sbs_css_loc, "body {\n\tbackground-image: url(".$css_bg[1][0].") !important;\n}");
			if($debug==1){
				echo "Custom BG Deleted.\n";
			}
		}
	}

	/* *** Pace Loader *** */
	if(isset($_POST['style_loader'])){
		if($_POST['style_loader']!=$conf_params['pace']){
			$conf_changes = 1;
			$conf_params['pace'] = $_POST['style_loader'];
			if(file_exists($pace_loc)){ unlink($pace_loc); }
			file_put_contents($pace_loc, '@import url("pace_'.$_POST['style_loader'].'.css");');
			if($debug==1){
				echo "Style Loader Changed into: ".$_POST['style_loader']."\n";
			}
		}
	}

	/* *** General Save via Theme Settings *** */
	if(isset($_POST['style_tab'])){
		if($_POST['style_tab']!=$conf_params['style']){
			$conf_changes = 1;
			$conf_params['style'] = $_POST['style_tab'];
			file_put_contents(
				$css_loc,
				preg_replace(
					"/\/\* \*\*\* THEME STYLER \*\*\* \*\/(.*)\/\* \*\*\* THEME STYLER END \*\*\* \*\//s",
					"/* *** THEME STYLER *** */\n".file_get_contents("../css/main_".$_POST['style_tab'].".css")."\n/* *** THEME STYLER END *** */",
					file_get_contents($css_loc)
				)
			);
			if($debug==1){
				echo "Style changed into: ".$_POST['style_tab']."\n";
			}
		}
	}
}

if($conf_params['custom_bg']!='no'){
	if(strpos(file_get_contents($sbs_css_loc), $conf_params['custom_bg'])===false Or $bg_change==1){
		file_put_contents($sbs_css_loc, preg_replace("/background-image: url\((.*)\)/", "background-image: url(../conf/custom_bg/".$conf_params['custom_bg'].")", file_get_contents($sbs_css_loc)));
		if($debug==1){
			echo "Custom BG has been changed. Replaced it in ".$sbs_css_loc."\n";
		}
	}
}

if($conf_changes==1){
	unlink($conf_loc);
	file_put_contents($conf_loc, json_encode($conf_params));
	if($debug==1){
		echo "Found Changes. Rewrote Config File.\n";
	}
}
