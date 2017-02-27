<?php
	require_once("action/CommonAction.php");

	class IndexAction extends CommonAction {
	
		public function __construct() {
			
		}
	
		protected function executeAction() {
				if(!empty($_POST["username"]) && !empty($_POST["pwd"])) {

				$data = [];
				$data["username"] = $_POST["username"];
				$data["pwd"] = $_POST["pwd"];

				$key = json_decode($this->callAPI("signin", $data));
			}
		}
	}


	
	
	
	
	
	