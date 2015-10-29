<?php
$fp = fsockopen("www.lowes.com", 80);
	if($fp){
		echo "<div id='internetConnection' class='four'></div>";
	} else {
		echo "<div id='internetConnection' class='off'></div>";
		echo "<img id='offInternetConnection' src='images/noInternet_v4.png'></img>";
	}
?>