<?php
	require_once("action/CommonAction.php");

	class IndexAction extends CommonAction {
		public $wrongLogin;
		public $errorMessage;
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}
	
		protected function executeAction() {
			if ($_SESSION["visibility"] >= CommonAction::$VISIBILITY_MEMBER) {
				header("location:character.php");
				exit;
			}
			else {
				header("location:login.php");
				exit;
			}

		}
	}
