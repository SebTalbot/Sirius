<?php
	require_once("action/CommonAction.php");

	class GameInfoAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}
	
		protected function executeAction() {
			if($_SESSION["visibility"] === CommonAction::$VISIBILITY_PUBLIC){
				header("location:login.php");
				exit;
			}
		}
	}
