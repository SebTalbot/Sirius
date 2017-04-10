class Player {
	constructor (x,y) {
		this.tickTime = 0;
		this.refreshRate = 5;
		this.spriteTime = 0;
		this.x = x;
		this.y = y;
		this.scale = 100;
		this.image = new Image();
		this.image.src = "images/player_sheet.png";
		this.sizeX = 40;
		this.sizeY = 40;

		this.attacked = false;
		this.appear = true;
		this.stand = false;
		this.attack = false;
	 }

	attackedAnime(){
		this.spriteTime = 0;
		this.tickTime = 0;
		this.refreshRate = 8;
		this.attacked = true;
		this.appear = false;
		this.stand = false;
		this.attack = false;
	}

	attackAnime(){
		this.spriteTime = 0;
		this.tickTime = 0;
		this.attacked = false;
		this.appear = false;
		this.stand = false;
		this.attack = true;
	}

	standAnime(){
		this.spriteTime = 0;
		this.tickTime = 0;
		this.refreshRate = 20;
		this.appear = false;
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
			ctx.drawImage(this.image,
						  this.spriteTime*this.sizeX,5*40,this.sizeX,this.sizeY,
						  this.x,this.y,this.scale,this.scale);

			// When 7 frame, change for stand
			if(this.spriteTime == 7){
				this.spriteTime = 0;
				this.tickTime = 0;
				this.attacked = false;
				this.stand = true;
				this.refreshRate = 20;
			}
		}

		else if(this.appear){
			ctx.drawImage(this.image,
						  this.spriteTime*this.sizeX,0,this.sizeX,this.sizeY,
						  this.x,this.y,this.scale,this.scale);

			// When 7 frame, change for stand
			if(this.spriteTime == 7){
				this.spriteTime = 0;
				this.tickTime = 0;
				this.appear = false;
				this.stand = true;
				this.refreshRate = 20;
			}
		}

		else if (this.stand) {
			ctx.drawImage(this.image,
						  this.spriteTime*this.sizeX,40,this.sizeX,this.sizeY,
						  this.x,this.y,this.scale,this.scale);
			// When 4 frame, refresh
			if(this.spriteTime == 3){
				this.spriteTime = 0;
				this.tickTime = 0;
			}
		}

		else if (this.attack){
			ctx.drawImage(this.image,
						  4*this.sizeX,40,this.sizeX,this.sizeY,
						  this.x,this.y,this.scale,this.scale);
		}
	}

}
