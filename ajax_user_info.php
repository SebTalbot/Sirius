<?php
	require_once("action/AjaxUserInfoAction.php");

	$action = new AjaxAction();
	$action->execute();

	echo json_decode($action->result);
