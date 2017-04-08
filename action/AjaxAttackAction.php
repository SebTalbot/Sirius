<?php
	require_once("action/CommonAction.php");

	class AjaxAttackAction extends CommonAction{
		public $result;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$data = [];
			$data["key"] = $_SESSION["key"];
			$data["skill-name"] = $_POST["attack"];
			$this->result = $this->callAPI("action", $data);
		}
	}
