<?php
	require_once("action/CommonAction.php");

	class AjaxGamesListAction extends CommonAction{
		public $result;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$key = array("key" => $_SESSION["key"]);
			$this->result = $this->callAPI("list", $key);
		}
	}
