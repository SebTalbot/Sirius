<?php
	require_once("action/AjaxGamesListAction.php");

	$action = new AjaxGamesListAction();
	$action->execute();

	echo $action->result;
