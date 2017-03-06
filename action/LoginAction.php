<?php
	require_once("action/CommonAction.php");

	class LoginAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}
	
		protected function executeAction() {
			if (empty($_SESSION["visibility"])) {
				if(!empty($_POST["username"]) && !empty($_POST["pwd"])) {

				$data = [];
				$data["username"] = $_POST["username"];
				$data["pwd"] = $_POST["pwd"];

				$key = json_decode($this->callAPI("signin", $data));
				$_SESSION["visibility"] = CommonACtion::$VISIBILITY_MEMBER;
				$_SESSION["key"] = $key;
				}
			}
			else {
				header("location:index.php");
				exit;
			}
		}
	}
