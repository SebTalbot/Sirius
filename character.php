<?php
	require_once("action/CharacterAction.php");

	$action = new CharacterAction();

	$action->execute();

	require_once("partial/header.php");
?>
<script src="js/jquery.min.js"></script>

<h1>index</h1>
<ul id="charList"></ul>
<script type="text/javascript">
	var jsonChar = <?= $_SESSION["jsonChar"] ?>;
	jsonChar = JSON.parse(jsonChar);

	var nodeListe = document.getElementById("charList");

	jQuery.each(jsonChar, function(key, val) {
	  var entry = document.createElement("li");
	  entry.appendChild(document.createTextNode(key +": "+val));
	  nodeListe.appendChild(entry);
	});
	
</script>

<?php
	require_once("partial/footer.php");