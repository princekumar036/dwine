<?php

function url_get_contents ($url) {
	if(ini_get('allow_url_fopen')) {
		$url_get_contents_data = file_get_contents( $url );
	} else if (function_exists('curl_exec')){
		$conn = curl_init($url);
		curl_setopt($conn, CURLOPT_SSL_VERIFYPEER, true);
		curl_setopt($conn, CURLOPT_FRESH_CONNECT,  true);
		curl_setopt($conn, CURLOPT_RETURNTRANSFER, 1);
		$url_get_contents_data = (curl_exec($conn));
		var_dump($url_get_contents_data);
		curl_close($conn);
	}else{
		return false;
	}
	return $url_get_contents_data;
}

$url = $_GET['file'];

if($response = url_get_contents($url.'?nocache='.rand())){
	header('Content-type: image/svg+xml');
	header("Content-Disposition: attachment; filename=mapsvg.svg");
	echo $response;
}else{
	echo 'Can\'t start automatic download. You need to enable "allow_url_fopen" option in php.ini settings or install cURL. <br />To download the file manually right-click on the link and choose "Save the link as...": <a href="'.$url.'">'.$url.'</a>';
	die();
}