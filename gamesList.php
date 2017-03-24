<?php
	require_once("action/GamesListAction.php");

	$action = new GamesListAction();

	$action->execute();

	require_once("partial/header.php");
?>
<script src="js/gamesList.js" charset="utf-8"></script>

<h1>Liste des parties</h1>
<ul id="listeParties">
</ul>
<?php
	require_once("partial/footer.php");
