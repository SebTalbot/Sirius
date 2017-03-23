window.onload = function() {

	setTimeout(updateInfo,2000);
}

function updateInfo() {
	console.log("yis");
	$.ajax({
		type : "POST",
		url : "ajax_games_list.php",
		data : {
		}
	}).done(function(reponse){
		var result = JSON.parse(reponse);

		var liste = document.getElementById("listeParties");
		liste.innerHTML = ""

		$.each(result, function(i, game) {
			var node = document.createElement("li");

			var name = createDiv("gameName", game.name);
			var level = createDiv("gameLevel", game.level);
			var nbUser = createDiv("gameNbUser", game.nb +"/"+ game.max_users)
			var hp = createDiv("gameHp", game.hp + "HP")
			var type = createDiv("gameType", game.type)

			node.appendChild(name);
			node.appendChild(level);
			node.appendChild(nbUser);
			node.appendChild(hp);
			node.appendChild(type);

			liste.appendChild(node);
		
		});
		setTimeout(updateInfo,2000);
	});
}

function createDiv(classTitle, value) {
	var div = document.createElement("div");
	var text = document.createTextNode(value);
	div.className = classTitle;
	div.appendChild(text);

	return div
}
