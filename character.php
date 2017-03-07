<?php
	require_once("action/CharacterAction.php");

	$action = new CharacterAction();

	$action->execute();

	require_once("partial/header.php");
?>
<h1>index</h1>
<h3><?= $_SESSION["key"] ?></h3>

<?php
	require_once("partial/footer.php");
?>
