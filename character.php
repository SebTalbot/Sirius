<?php
	require_once("action/CharacterAction.php");

	$action = new CharacterAction();

	$action->execute();

	require_once("partial/header.php");
?>
<script src="js/user.js"></script>
<div id="page-character">
	<h1>Infos Du Personnage</h1>
	<ul id="listeInfos">
	</ul>
	<img src="images/character.jpg" alt=""/>
	<p style="clear:both;"></p>
</div>
<?php
	require_once("partial/footer.php");
