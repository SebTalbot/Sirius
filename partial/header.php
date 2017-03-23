<!DOCTYPE html>
<html>
	<head>
		<title>Sirius</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="css/global.css">
		<script src="js/jquery.min.js"></script>
	</head>
	<body>
		<div class="menu-section">
			<ul>
				<?php
				if ($_SESSION["visibility"] >= CommonAction::$VISIBILITY_MEMBER) {
					?>
					<li><a href="character.php">Personnage</a></li>
					<li><a href="gamesList.php">Liste Parties</a></li>
					<li><a href="?logout=true">Logout</a></li>
					<?php
				}
				?>
			</ul>
		</div>
		<div class="container">
