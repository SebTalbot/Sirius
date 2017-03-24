window.onload = function() {

	setTimeout(updateInfo,2000);
}

function updateInfo() {
	$.ajax({
		type : "POST",
		url : "ajax_game_state.php",
		data : {
		}
	}).done(function(reponse){
		var result = JSON.parse(reponse);

		var liste = document.getElementById("gameInfo");
		liste.innerHTML = ""

		console.log(result);

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

	return div
}
