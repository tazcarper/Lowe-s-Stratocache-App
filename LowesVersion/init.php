<?php

	$fPath='..\..\httpd\conf\lighttpd.conf';
	$contents=file_get_contents($fPath);
	
	/*
	$assign = 'mimetype.assign'
	$mimeType = 'image/svg+xml';
	$position1 = strpos($contents, $mimeType);
	if ($position1 === false) {
		file_put_contents($fPath, "\r\n".'mimetype.assign += ( ".svg"		  =>	  "image/svg+xml")', FILE_APPEND);
		$contents=file_get_contents($fPath);
	}
	*/
	
	$myRegEx = '/mimetype.assign[\s]*=[\s]*\(/'; //the '\s' searches for whitespace (supposed to)
	$svgRegEx = '/[\s]*".svg"[\s]*=>[\s]*"image\/svg\+xml"[\s]*[,]{0,1}/';
	$svgStr = 'image/svg+xml';
	$match = preg_match($myRegEx,$contents,$matches);
	if ($match == 1) {
		$svgMatch = preg_match($svgRegEx,$contents,$svgMatches);
		if($svgMatch != 1) {
			$position1 = strpos($contents,$matches[0]);
			$position1 = $position1 + strlen($matches[0]);
			$newstring = substr_replace($contents,"\r\n".'  ".svg"		  =>	  "image/svg+xml",',$position1,0);
			file_put_contents($fPath,$newstring);
			$contents=file_get_contents($fPath);
		}
	} else {
		file_put_contents($fPath, "\r\n".'mimetype.assign             = ('."\r\n".'".svg"		  =>	  "image/svg+xml"'."\r\n".')', FILE_APPEND);
	}
	
	$jsonRegEx = '/static-file.exclude-extensions[\s]*=[\s]*\([\sa-zA-Z0-9".,]*.json[\sa-zA-Z0-9".,]*\)/';
	$commentedJsonRegEx = '/#[\s]*static-file.exclude-extensions[\s]*=[\s]*\([\sa-zA-Z0-9".,]*.json[\sa-zA-Z0-9".,]*\)/';
	$newExtensionsRegEx = '/static-file.exclude-extensions[\s]*=[\s]*\([\s]*".php"[\s,]*".pl"[\s,]*".fcgi"[\s,]*".cgi"[\s]*\)/';
	//$regEx = '/static-file.exclude-extensions[\s]*=[\s]*\([\sa-zA-Z0-9.",]*".php"[^(json)]*".pl"[^(json)]*".fcgi"[^(json)]*".cgi"[^(json)]*\)/';
	//$myMatchx = preg_match($regEx, $contents, $xMatches);
	//echo $xMatches[0];
	$commentedNewExtensionsRegEx ='/#[\s]*static-file.exclude-extensions[\s]*=[\s]*\([\s]*".php"[\s,]*".pl"[\s,]*".fcgi"[\s,]*".cgi"[\s]*\)/';
	$commentedJsonMatch = preg_match($commentedJsonRegEx,$contents,$commentedJsonMatches);
	//echo $commentedNewExtensionsMatches[0];
	if($commentedJsonMatch == 1) {
		$commentedNewExtensionsMatch = preg_match($commentedNewExtensionsRegEx,$contents,$commentedNewExtensionsMatches);
		if($commentedNewExtensionsMatch == 1) {
			file_put_contents($fPath, "\r\n".'static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi" )', FILE_APPEND);
		} else {
			$newExtensionsMatch = preg_match($newExtensionsRegEx,$contents,$newExtensionsMatches);
			if($newExtensionsMatch != 1) {
				$commentedJsonPosition = strpos($contents,$commentedJsonMatches[0]);
				$commentedJsonPosition = $commentedJsonPosition + strlen($commentedJsonMatches[0]);
				$replacementString = substr_replace($contents, "\r\n".'static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi" )', $commentedJsonPosition,0);
				file_put_contents($fPath, $replacementString);
				//$contents = file_get_contents($fPath);	
			}
		}
	} else {
		$jsonMatch = preg_match($jsonRegEx, $contents, $jsonMatches);
		if($jsonMatch == 1){
			$replacement = preg_replace($jsonRegEx, '#static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi", ".json" )', $contents);
			file_put_contents($fPath, $replacement);
			$contents = file_get_contents($fPath);
			$newExtensionsMatch = preg_match($newExtensionsRegEx,$contents,$newExtensionsMatches);
			if ($newExtensionsMatch != 1) {
				$jsonPosition = strpos($contents,'#static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi", ".json" )');
				$jsonPosition = $jsonPosition + strlen('#static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi", ".json" )');
				$newContents = substr_replace($contents, "\r\n".'static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi" )', $jsonPosition,0);
				file_put_contents($fPath, $newContents);
				//$contents = file_get_contents($fPath);
			}
		} else {
			$commentedNewExtensionsMatch = preg_match($commentedNewExtensionsRegEx,$contents,$commentedNewExtensionsMatches);
			if($commentedNewExtensionsMatch == 1) {
				file_put_contents($fPath, "\r\n".'static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi" )', FILE_APPEND);
			}
			else {
				$newExtensionsMatch = preg_match($newExtensionsRegEx,$contents,$newExtensionsMatches);
				if($newExtensionsMatch != 1) {
					file_put_contents($fPath, "\r\n".'static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi" )', FILE_APPEND);
				}
			}
		}

	}

	/*
	$extensions = 'static-file.exclude-extensions';
	$fullExtensions = 'static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi" )';
	$commentedExtensions = '#static-file.exclude-extensions';
	$position2 = strpos($contents, $extensions);
	if ($position2 == false) {
		file_put_contents($fPath, "\r\n".'static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi" )', FILE_APPEND);
	} else {
		$position3 = strpos($contents, $fullExtensions);
		if($position3 == false){
			$contents=str_replace($extensions,$commentedExtensions,$contents,$count);
			if($count){
				file_put_contents($fPath,$contents);
				$contents=file_get_contents($fPath);
			}
			file_put_contents($fPath, "\r\n".'static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".cgi" )', FILE_APPEND);
		}
	}
	*/
?>