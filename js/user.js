window.onload = function() {
	setTimeout(updateInfo,2000);
};

function updateInfo() {
		$.ajax({
			type : "POST",
			url : "ajax_user_info.php",
			data : {
			}
		}).done(function(reponse){
			var result = JSON.parse(reponse);
			var liste = document.getElementById("listeInfos");
			liste.innerHTML = "";

			liste.appendChild(createDiv("Nom:"));
			liste.appendChild(createDiv(result.username));
			liste.appendChild(createDiv("HP:"));
			liste.appendChild(createDiv(result.hp));
			liste.appendChild(createDiv("MP:"));
			liste.appendChild(createDiv(result.mp));
			liste.appendChild(createDiv("Niveau:"));
			liste.appendChild(createDiv(result.level));
			liste.appendChild(createDiv("Experience:"));
			liste.appendChild(createDiv(result.exp+"/"+result.next_level_exp));
			liste.appendChild(createDiv("Victoires:"));
			liste.appendChild(createDiv(result.victories));
			liste.appendChild(createDiv("Defaites:"));
			liste.appendChild(createDiv(result.loss));
			liste.appendChild(createDiv("Chance de feintes:"));
			liste.appendChild(createDiv(result.dodge_chance+"%"));
			liste.appendChild(createDiv("Armure:"));
			liste.appendChild(createDiv(result.dmg_red+"%"));

			var clear = createDiv("");
			clear.style.cssText = "clear: both";

			liste.appendChild(clear);

			setTimeout(updateInfo,2000);
		});
}

function createDiv(value) {
	var div = document.createElement("div");
	var text = document.createTextNode(value);
	div.appendChild(text);

	return div;
}
