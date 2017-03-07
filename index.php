<?php
	require_once("action/IndexAction.php");

	$action = new IndexAction();

	$action->execute();

	require_once("partial/header.php");
?>
<h1>index</h1>
<h3><?= $_SESSION["key"] ?></h3>

<?php
	require_once("partial/footer.php");
?>
