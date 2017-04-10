<?php
	require_once("action/GameInfoAction.php");

	$action = new GameInfoAction();

	$action->execute();

	require_once("partial/header.php");
?>
<script src="js/gamePlay.js" charset="utf-8"></script>
<script src="js/playerAnimation.js" charset="utf-8"></script>
<script src="js/bossAnimation.js" charset="utf-8"></script>
<script src="js/projectileAnimation.js" charset="utf-8"></script>

<div id="page-game-play">
	<div id="canvas-container">
		<canvas width="800" height="450" id= "canvas" ></canvas>
	</div>

	<ul id="skills-list">
		<h2 style="text-align:center;margin-top:20px;">LOADING</h2>
		<img src="images/skills_loading.gif" style="width:360px;margin-top:20px;"/>
	</ul>

	<ul id="combat-log">
	</ul>
</div>
<?php
	require_once("partial/footer.php");
