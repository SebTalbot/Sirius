<?php
	require_once("action/CommonAction.php");

	class CharacterAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}
	
		protected function executeAction() {
			if($_SESSION["visibility"] === CommonAction::$VISIBILITY_PUBLIC){
				header("location:login.php");
				exit;
			}

			if(empty($_SESSION["jsonChar"])){
				$key = array("key" => $_SESSION["key"]);
				$_SESSION["jsonChar"] = json_encode($this->callAPI("user-info", $key));
			}
		}
	}
