var ctx=null;
var ready = true;
var player = null;
var game = null;
var playerhp = 1;
var playermaxhp = 1;
var playermp = 1;
var playermaxmp = 1;
var gamehp = 1;
var gamemaxhp = 1;
var other_players = null;
var spritePlayer = null;
var spriteBoss = null;
var spriteAttacks = [];

window.onload = function() {
	var c = document.getElementById("canvas");
	ctx = c.getContext("2d");

	spritePlayer = new Player(50,250);
	spriteBoss = new Boss(520,180);

	tick();
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
		// Si gagne
		if (result == "GAME_NOT_FOUND_WIN") {
			var liste = document.getElementById("skills-list");
			liste.innerHTML = "";
			var canvasc = document.getElementById("canvas-container");
			canvasc.innerHTML = "";

			var img = document.createElement("img");
			img.src = "images/game_won.gif";
			img.className = "image-fin"
			var titre = document.createElement("h1");
			titre.innerHTML = "Victoire"

			canvasc.appendChild(titre)

			canvasc.appendChild(img);

			appendCombatLog("Vous avez gagner!", "rgba(200,255,100,0.2)");

		}
		// Si perdu
		else if (result == "GAME_NOT_FOUND_LOST") {
			var liste = document.getElementById("skills-list");
			liste.innerHTML = "";
			var canvasc = document.getElementById("canvas-container");
			canvasc.innerHTML = "";

			var img = document.createElement("img");
			img.src = "images/game_lost.gif";
			img.className = "image-fin"
			var titre = document.createElement("h1");
			titre.innerHTML = "Défaite"

			canvasc.appendChild(titre)
			canvasc.appendChild(img);

			appendCombatLog("Vous avez gagner!", "rgba(200,255,100,0.2)");

		}
		else {
		// Variables
		player = result.player
		playerhp = player.hp;
		playermaxhp = player.max_hp;
		playermp = player.mp;
		playermaxmp = player.max_mp;
		game = result.game
		gamehp = game.hp;
		gamemaxhp = game.max_hp;
		other_players = result.other_players


			// Afficher skills
			var liste = document.getElementById("skills-list");
			liste.innerHTML = "";

			$.each(player.skills, function(i, skill) {
				var node = document.createElement("li");

				var name = createDiv( skill.name);
				var level = createDiv( "Niveau: " + skill.level);
				var cost = createDiv( "Cout: " + skill.cost);
				var dmg = createDiv( "Dommage: " + skill.dmg);

				node.appendChild(name);
				node.appendChild(level);
				node.appendChild(cost);
				node.appendChild(dmg);

				node.onclick = function() {attackBtn(skill)};;
				liste.appendChild(node);
			});

			// Interaction avec le jeux
			if(game.attacked){
				spritePlayer.attackedAnime();
				spriteBoss.attackAnime();
				appendCombatLog("Vous vous faites attaquer", "rgba(255,0,0,0.2)");
			}
			playervieavant = playerhp;

		setTimeout(updateInfo,2000);
	}});

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

function attackBtn(skill) {
	if(ready) {
		if(player.mp >= skill.cost) {
			spritePlayer.attackAnime();
			spriteAttacks.push(new Projectile(skill.name,75,270,500,300))
			$.ajax({
				url: 'ajax_attack.php',
				type: 'POST',
				data: {
					attack:skill.name}
				}
			)
			.done(function(reponse) {
				ready = false;
				appendCombatLog("Vous attaquez de " + skill.dmg, "rgba(050,255,155,0.1)");
				setTimeout(function(){ready = true; spritePlayer.standAnime();}, 2000);
			});
		}
		else {
			appendCombatLog("Vous n'avez pas assez de MP " + playermp + "/" + skill.cost, "rgba(150,150,255,0.1)");
		}
	}
	else {
		appendCombatLog("Attendez 2 secondes entre chaque attaques", "rgba(255,255,255,0.1)");
	}
}

function tick() {
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		// Canvas
		// Vie joueur
		var pourcentHp = playerhp*100/playermaxhp;
		ctx.fillStyle="#500";
		ctx.fillRect(5,5,300,30)
		ctx.fillStyle="#0A0";
		ctx.fillRect(5,5,3*pourcentHp,30)
		ctx.fillStyle="#fff";
		ctx.font = "30px arial";
		ctx.textAlign = "center";
		ctx.fillText(playerhp + "/" + playermaxhp,155,30);

		// Vie Boss
		var pourcentHp = gamehp*100/gamemaxhp;
		ctx.fillStyle="#500";
		ctx.fillRect(495,5,300,30)
		ctx.fillStyle="#0A0";
		ctx.fillRect(795-pourcentHp*3,5,pourcentHp*3,30)
		ctx.fillStyle="#fff";
		ctx.font = "30px arial";
		ctx.textAlign = "center";
		ctx.fillText(gamehp + "/" + gamemaxhp,645,30);

		// Mana joueur
		var pourcentMp = playermp*75/playermaxmp;
		ctx.fillStyle="#333";
		ctx.fillRect(5,35,225,15)
		ctx.fillStyle="#00A";
		ctx.fillRect(5,35,pourcentMp*3,15);
		ctx.fillStyle="#fff";
		ctx.font = "15px arial";
		ctx.textAlign = "center";
		ctx.fillText(playermp + "/" + playermaxmp,112,48);

	spritePlayer.tick();
	spriteBoss.tick();
    for(var i = 0; i < spriteAttacks.length;i++){
        var atk = spriteAttacks[i].tick();
		if(!atk){
			spriteAttacks.splice(i,1);
			i--;
		}
    }
	window.requestAnimationFrame(tick);
}
