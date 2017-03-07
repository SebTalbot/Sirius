<?php
	require_once("action/CommonAction.php");

	class LoginAction extends CommonAction {
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

			$this->wrongLogin = false;

			if(!empty($_POST["username"]) && !empty($_POST["pwd"])) {
				$data = [];
				$data["username"] = $_POST["username"];
				$data["pwd"] = $_POST["pwd"];

				$key = json_decode($this->callAPI("signin", $data));
				if ($key === "EMPTY_USERNAME") {
					$this->wrongLogin = true;
					$this->errorMessage = "Vous devez entrer un nom d'usager";
				}
				else if ($key === "USER_NOT_FOUND") {
					$this->wrongLogin = true;
					$this->errorMessage = "L'usager est introuvable";
				}
				else if ($key === "CHARACTER_NOT_CREATED") {
					$this->wrongLogin = true;
					$this->errorMessage = "Le personnage n'a pas été créé";
				}
				else if ($key === "USER_IS_BANNED") {
					$this->wrongLogin = true;
					$this->errorMessage = "L'usager est banni";
				}
				else if ($key === "TOO_MANY_CONNECTIONS") {
					$this->wrongLogin = true;
					$this->errorMessage = "Trop de connections";
				}
				else if ($key === "INVALID_USERNAME_PASSWORD") {
					$this->wrongLogin = true;
					$this->errorMessage = "Mot de passe invalide";
				}
				else {
					$_SESSION["visibility"] = CommonACtion::$VISIBILITY_MEMBER;
					$_SESSION["key"] = $key;
					header("location:character.php");
					exit;
				}
			}
		}
	}
