<?php
    require_once("action/AjaxAttackAction.php");

    $action = new AjaxAttackAction();
    $action->execute();

	echo json_encode($action->result);
?>
