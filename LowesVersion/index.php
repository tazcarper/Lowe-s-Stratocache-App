<?php @require('init.php');?>
<!doctype html> <html> <head> <meta charset="utf-8"> <title></title> <meta name="description" content=""> <meta name="viewport" content="width=device-width"> <!-- Place favicon.ico and apple-touch-icon.png in the root directory --> <link rel="stylesheet" href="styles/lowesStyle.css" /> <link rel="stylesheet" href="styles/main.css"> </head> <body ng-app="stratocacheApp" ng-controller="global"> <!--[if lte IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]--> <!-- Add your site or application content here --> <div ng-include src="'includes/navigation.html'"></div> <div class="page" ng-view ng-click="setTime()"></div> <div ng-include src="'includes/footer.html'"></div> <script src="scripts/vendor.1fbfc3fd.js"></script> <script src="scripts/scripts.b8ceb950.js"></script>
    <script type="text/javascript">
    	$.ajax({
			type: 'GET',
			url: './include-internetConnection.php',
			data: null,
			success: function(text) {
				$('body').append(text);
			}
		});
    </script
</body> </html>