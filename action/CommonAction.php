<?php
	session_start();

	abstract class CommonAction {
	
		public function __construct() {
		}
		
		public function execute() {
			$this->executeAction();
		}

		protected function callAPI($service, $data) {
			$apiURL = "http://apps-de-cours.com/web-sirius/server/api/" . $service . ".php";

			$options = array(
			    'http' => array(
			        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
			        'method'  => 'POST',
			        'content' => http_build_query($data)
			    )
			);
			$context  = stream_context_create($options);
			$result = file_get_contents($apiURL, false, $context);

			if (strpos($result, "<br") !== false) {
					var_dump($result);
					exit;
				}
				
			return $result;
		}
		
		abstract protected function executeAction();
	}

	
	
	
	
	
	
	
	