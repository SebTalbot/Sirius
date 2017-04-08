var ready = true
var player = null
var boss = null
var other_players = null

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
		console.log(result)
		// Variables
		player = result.player
		boss = result.game
		other_players = result.other_players

		// Canvas
		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");
		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

			// Vie joueur
			var pourcentHp = result.player.hp*100/result.player.max_hp;
			ctx.fillStyle="#500";
			ctx.fillRect(5,5,100,10)
			ctx.fillStyle="#0A0";
			ctx.fillRect(5,5,pourcentHp,10)
			ctx.fillStyle="#fff";
			ctx.font = "10px arial";
			ctx.textAlign = "center";
			ctx.fillText(result.player.hp + "/" + result.player.max_hp,55,13);

			// Vie Boss
			var pourcentHp = result.game.hp*100/result.game.max_hp;
			ctx.fillStyle="#500";
			ctx.fillRect(195,5,100,10)
			ctx.fillStyle="#0A0";
			ctx.fillRect(295-pourcentHp,5,pourcentHp,10)
			ctx.fillStyle="#fff";
			ctx.font = "10px arial";
			ctx.textAlign = "center";
			ctx.fillText(result.game.hp + "/" + result.game.max_hp,245,13);

			// Vie joueur
			var pourcentMp = result.player.mp*75/result.player.max_mp;
			ctx.fillStyle="#333";
			ctx.fillRect(5,15,75,10)
			ctx.fillStyle="#00A";
			ctx.fillRect(5,15,pourcentMp,10)
			ctx.fillStyle="#fff";
			ctx.font = "9px arial";
			ctx.textAlign = "center";
			ctx.fillText(result.player.mp + "/" + result.player.max_mp,55,24);

		// Afficher skills
		var liste = document.getElementById("skills-list");
		liste.innerHTML = "";

		$.each(result.player.skills, function(i, skill) {
			var node = document.createElement("li");

			var name = createDiv( skill.name);
			var level = createDiv( "Niveau: " + skill.level);
			var cost = createDiv( "Cout: " + skill.cost);
			var dmg = createDiv( "Dommage: " + skill.dmg);

			node.appendChild(name);
			node.appendChild(level);
			node.appendChild(cost);
			node.appendChild(dmg);

			// node.setAttribute("onclick", "attack("+ skill.name +")");
			node.onclick = function() {attack(skill)};
			liste.appendChild(node);
		});

		setTimeout(updateInfo,2000);
	});
}

function getId(gameId) {
	window.location.href="gamesList.php?gameId="+gameId;
}

function createDiv(value) {
	var div = document.createElement("div");
	var text = document.createTextNode(value);
	div.appendChild(text);

	return div;
}

function appendCombatLog(string, bgColor){
	var combatLog = document.getElementById("combat-log");
	var node = document.createElement("li");
	var text = document.createTextNode(string);

	node.style.backgroundColor = bgColor;
	node.appendChild(text);
	combatLog.prepend(node);
}

async function attack(skill) {
	if(ready) {
		if(mp >= skill.cost) {
			$.ajax({
				url: 'ajax_attack.php',
				type: 'POST',
				data: {
					attack:skill.name}
				}
			)
			.done(function(reponse) {
				ready = false
				appendCombatLog("Vous attaquez de " + skill.dmg, "rgba(050,255,155,0.1)");
				setTimeout(function(){ready = true}, 2000)
			})
		}
		else {
			appendCombatLog("Vous n'avez pas assez de MP " + mp + "/" + skill.cost, "rgba(150,150,255,0.1)");
		}
	}
	else {
		appendCombatLog("Attendez 2 secondes entre chaque attaques", "rgba(255,255,255,0.1)")
	}
}
