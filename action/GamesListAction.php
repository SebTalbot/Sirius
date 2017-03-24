<?php
	require_once("action/CommonAction.php");

	class GamesListAction extends CommonAction {
	
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
			
		}
	
		protected function executeAction() {
			if($_SESSION["visibility"] === CommonAction::$VISIBILITY_PUBLIC){
				header("location:login.php");
				exit;
			}

			if(!empty($_GET["gameId"])) {
				$data = [];
				$data["key"] = $_SESSION["key"];
				$data["id"] = $_GET["gameId"];
				sleep(2);
				$this->result = $this->callAPI("enter", $data);

				echo $this->result;
				header("location:gamePlay.php");
				exit;
			}
		}
	}
