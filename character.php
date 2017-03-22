<?php
	require_once("action/CharacterAction.php");

	$action = new CharacterAction();

	$action->execute();

	require_once("partial/header.php");
?>
<script src="js/jquery.min.js"></script>
<script src="js/user.js"></script>

<h1>Infos Personnage</h1>
<ul>
	<li><div class="chmpInfo">Nom:</div			      ><div class="chmpOutput" id="chmpNom"></div></li>
	<li><div class="chmpInfo">HP:</div			      ><div class="chmpOutput" id="chmpHp"></div></li>
	<li><div class="chmpInfo">MP:</div				  ><div class="chmpOutput" id="chmpMp"></div></li>
	<li><div class="chmpInfo">Niveau:</div			  ><div class="chmpOutput" id="chmpNiv"></div></li>
	<li><div class="chmpInfo">Experience:</div		  ><div class="chmpOutput" id="chmpExp"></div></li>
	<li><div class="chmpInfo">Victoires:</div		  ><div class="chmpOutput" id="chmpVic"></div></li>
	<li><div class="chmpInfo">Defaites:</div		  ><div class="chmpOutput" id="chmpDef"></div></li>
	<li><div class="chmpInfo">Chances de feintes:</div><div class="chmpOutput" id="chmpChances"></div></li>
	<li><div class="chmpInfo">Armure:</div			  ><div class="chmpOutput" id="chmpArm"></div></li>
</ul>

<script type="text/javascript">
	// var jsonChar = <?= $_SESSION["jsonChar"] ?>;
	// jsonChar = JSON.parse(jsonChar);
    //
	
</script>

<?php
	require_once("partial/footer.php");
