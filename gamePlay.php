<?php
	require_once("action/GameInfoAction.php");

	$action = new GameInfoAction();

	$action->execute();

	require_once("partial/header.php");
?>
<script src="js/gamePlay.js" charset="utf-8"></script>

<h1>Game Info</h1>
<ul id="gameInfo">
</ul>
<?php
	require_once("partial/footer.php");
