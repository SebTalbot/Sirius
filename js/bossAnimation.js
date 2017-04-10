class Boss {
	constructor (x,y) {
		this.tickTime = 0;
		this.refreshRate = 10;
		this.spriteTime = 0;
		this.x = x;
		this.y = y;
		this.scale = 200;
		this.image = new Image();
		this.image.src = "images/boss_sheet.png";
		this.sizeX = 60;
		this.sizeY = 55;

		this.attacked = false;
		this.stand = true;
		this.attack = false;
	 }

	attackedAnime(){
		this.spriteTime = 0;
		this.tickTime = 0;
		this.refreshRate = 20;
		this.attacked = true;
		this.stand = false;
		this.attack = false;
	}

	attackAnime(){
		this.spriteTime = 0;
		this.tickTime = 0;
		this.attacked = false;
		this.stand = false;
		this.attack = true;
	}

	standAnime(){
		this.spriteTime = 0;
		this.tickTime = 0;
		this.refreshRate = 20;
		this.attacked = false;
		this.stand = true;
		this.attack = false;
	}

	tick() {
		// Inc psritetime with refresh rate
		this.tickTime++;
		if (this.tickTime == this.refreshRate) {
			this.spriteTime++;
			this.tickTime = 0;
		}

		if(this.attacked){
			var keep = false;
			ctx.drawImage(this.image,
						  this.spriteTime*this.sizeX,1*this.sizeY,this.sizeX,this.sizeY,
						  this.x,this.y,this.scale,this.scale);


			if(this.spriteTime == 4){
				this.standAnime();
			}

		}

		else if(this.attack){
			ctx.drawImage(this.image,
						  0,3*this.sizeY,this.sizeX,this.sizeY,
						  this.x,this.y,this.scale,this.scale);

			if(this.spriteTime == 8){
				this.standAnime();
			}

		}

		else if(this.stand){
			ctx.drawImage(this.image,
						  2*this.sizeX+this.spriteTime*this.sizeX,1*this.sizeY,this.sizeX,this.sizeY,
						  this.x,this.y,this.scale,this.scale);

			// When 7 frame, change for stand
			if(this.spriteTime == 4){
				this.spriteTime = 0;
			// 	this.tickTime = 0;
			// 	this.appear = false;
			// 	this.stand = true;
			// 	this.refreshRate = 20;
			}
		}

		else if (this.stand) {
		}

		else if (this.attack){
		}
	}

}
