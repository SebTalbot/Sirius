<?php
	require_once("action/CommonAction.php");

	class AjaxEnterGameAction extends CommonAction{
		public $result;

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			if(!empty($_GET["gameId"])) {
				$data = [];
				$data["key"] = $_SESSION["key"];
				$data["id"] = $_GET["gameId"];
				sleep(2);
				$this->result = $this->callAPI("enter", $data);

				echo $this->result;
			}
		}
	}
