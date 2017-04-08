<?php
	require_once("action/GamesListAction.php");

	$action = new GamesListAction();

	$action->execute();

	require_once("partial/header.php");
?>
<script src="js/gamesList.js" charset="utf-8"></script>
<div id="page-games-list">
	<h1>Liste des parties</h1>
	<ul id="listeParties">
		<h2>Loading</h2>
		<img src="images/games_loading.gif" alt=""/>
	</ul>
</div>
<?php
	require_once("partial/footer.php");
