<?php
	require_once("action/AjaxUserInfoAction.php");

	$action = new AjaxUserInfoAction();
	$action->execute();

	echo $action->result;
