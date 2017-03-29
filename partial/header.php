<!DOCTYPE html>
<html>
	<head>
		<title>Sirius</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="css/global.css">
		<script src="js/jquery.min.js"></script>
		<script >
			$(document).ready(function() {
				$("#menu-section").slideDown(1000);
			});
		</script>
	</head>
	<body>
		<div id="menu-section">
			<ul>
				<li onclick="location.href='http://apps-de-cours.com/web-sirius/server/hall-of-fame.php'">Classement</a></li>
				<?php
				if ($_SESSION["visibility"] >= CommonAction::$VISIBILITY_MEMBER) {
					?>
					<li onclick="location.href='character.php'">Votre Personnage</li>
					<li onclick="location.href='gamesList.php'">Liste Parties</a></li>
					<li onclick="location.href='?logout=true'">Logout</a></li>
					<?php
				}
				?>
				<div class="clear"></div>
			</ul>
		</div>
		<div class="container">
