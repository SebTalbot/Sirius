var ready = true

window.onload = function() {
	setTimeout(updateInfo,2000);
};

function updateInfo() {
	$.ajax({
		type : "POST",
		url : "ajax_game_state.php",
		data : {
		}
	})
	.done(function(reponse){
		var result = JSON.parse(reponse);
		console.log(reponse)
		console.log("Boss: " + result.game.hp)
		console.log("Player: " + result.player.hp)

		// Afficher skills
		var liste = document.getElementById("skills-list");
		liste.innerHTML = "";

		$.each(result.player.skills, function(i, skill) {
			var node = document.createElement("li");

			var name = createDiv("gameName", skill.name);
			var level = createDiv("gameLevel", skill.level);
			var cost = createDiv("gameNbUser", skill.cost);
			var dmg = createDiv("gameHp", skill.dmg);

			node.appendChild(name);
			node.appendChild(level);
			node.appendChild(cost);
			node.appendChild(dmg);

			// node.setAttribute("onclick", "attack("+ skill.name +")");
			node.onclick = function() {attack(skill.name)};
			liste.appendChild(node);
		});

		setTimeout(updateInfo,2000);
	});
}

function getId(gameId) {
	window.location.href="gamesList.php?gameId="+gameId;
}

function createDiv(classTitle, value) {
	var div = document.createElement("div");
	var text = document.createTextNode(value);
	div.className = classTitle;
	div.appendChild(text);

	return div;
}

async function attack(atkName) {
	if(ready) {
		$.ajax({
			url: 'ajax_attack.php',
			type: 'POST',
			data: {
				attack:atkName}
			}
		)
		.done(function(reponse) {
			console.log(atkName)
			console.log(reponse)
			ready = false
			setTimeout(function(){ready = true}, 2000)
		})
	}
}
