<?php
	require_once("action/AjaxGameInfoAction.php");

	$action = new AjaxGameInfoAction();
	$action->execute();

	echo $action->result;
