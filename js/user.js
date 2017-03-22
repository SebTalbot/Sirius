window.onload = function() {

	setTimeout(function() {
		$.ajax({
			type : "POST",
			url : "ajax_user_info.php",
			data : {
			}
		}).done(function(reponse){
			var result = JSON.parse(reponse);
			console.log(result)
			document.getElementById("chmpNom").innerHTML = result.username
			document.getElementById("chmpHp").innerHTML = result.hp
			document.getElementById("chmpMp").innerHTML = result.mp
			document.getElementById("chmpNiv").innerHTML = result.level
			document.getElementById("chmpExp").innerHTML = result.exp
			document.getElementById("chmpVic").innerHTML = result.victories
			document.getElementById("chmpDef").innerHTML = result.loss
			document.getElementById("chmpChances").innerHTML = result.dodge_chance
			document.getElementById("chmpArm").innerHTML = result.dmg_red
		})
	},2000)
}
