<!DOCTYPE html>
<html>
	<head>
		<title>Sirius</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="css/global.css">
	</head>
	<body>
		<div class="menu-section">
			<ul>
				<li><a href="index.php">Accueil</a></li>
				<?php
				if (empty($_SESSION["visibility"])) {
					?>
					<li><a href="login.php">Login</a></li>
					<?php
				}
				else {
					?>
					<li><a href="?logout=true">Logout</a></li>
					<?php
				}
				?>
			</ul>
		</div>
		<div class="container">
