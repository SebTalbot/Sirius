window.onload = function() {
	setTimeout(updateInfo,2000);
};

function updateInfo() {
	$.ajax({
		type : "POST",
		url : "ajax_games_list.php",
		data : {
		}
	}).done(function(reponse){
		var result = JSON.parse(reponse);

		var liste = document.getElementById("listeParties");
		liste.innerHTML = "";

		$.each(result, function(i, game) {
			var node = document.createElement("li");

			var name = createDiv("gameName", game.name);
			var level = createDiv("gameLevel", "Niveau " + game.level);
			var nbUser = createDiv("gameNbUser", game.nb +"/"+ game.max_users+" Joueurs");
			var hp = createDiv("gameHp", game.hp + "HP");
			var type = createDiv("gameType", game.type);

			node.appendChild(name);
			node.appendChild(level);
			node.appendChild(nbUser);
			node.appendChild(hp);
			node.appendChild(type);

			node.setAttribute("onclick", "getId("+game.id+")");
			liste.appendChild(node);
		});
		setTimeout(updateInfo,2000);
	});
}

function getId(gameId) {
	window.location.href="gamesList.php?gameId="+gameId;
}

function createDiv(idTitle, value) {
	var div = document.createElement("div");
	var text = document.createTextNode(value);
	div.id = idTitle;
	div.appendChild(text);

	return div;
}
