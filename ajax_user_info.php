<?php
	require_once("action/AjaxUserInfoAction.php");

	$action = new AjaxAction();
	$action->execute();

	echo $action->result;