<?php
	require_once("action/GameInfoAction.php");

	$action = new GameInfoAction();

	$action->execute();

	require_once("partial/header.php");
?>
<script src="js/gamePlay.js" charset="utf-8"></script>


<div class="canvas-container">
	<canvas  id= "canvas" ></canvas>
</div>
<ul id="skills-list">
</ul>
<?php
	require_once("partial/footer.php");
