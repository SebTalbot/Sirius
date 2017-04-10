class Projectile {
	constructor (type,x,y) {
		this.tickTime = 0;
		this.spriteTime = 0;
		this.t = 0;
		this.x = x;
		this.y = y;
		this.image = new Image();
		if(type == "Normal"){
			this.image.src = "images/atk_sheet_1.png";
			this.refreshRate = 3;
			this.scale = 50;
			this.sizeX = 64;
			this.sizeY = 64;
			this.startX = 1;
			this.startY = 4;
			this.nbSprites = 7;
		}
		else if(type == "Special1"){
			this.image.src = "images/atk_sheet_2.png";
			this.refreshRate = 15;
			this.scale = 153;
			this.sizeX = 153;
			this.sizeY = 153;
			this.startX = 1;
			this.startY = 0;
			this.nbSprites = 5;
			this.y -= this.sizeY/3;
		}
		else if(type == "Special2"){
			this.image.src = "images/atk_sheet_3.png";
			this.refreshRate = 10;
			this.scale = 153;
			this.sizeX = 207;
			this.sizeY = 241;
			this.startX = 1;
			this.startY = 0;
			this.nbSprites = 2;
			this.y -= this.sizeY/3;
		}
		this.alive = true;
	 }

	tick() {
		this.tickTime++;
		if (this.tickTime == this.refreshRate) {
			this.spriteTime++;
			this.tickTime = 0;
		}

		//move
		this.x += 8;
		ctx.drawImage(this.image,
					  this.startX*this.spriteTime*this.sizeX,
					  this.startY*this.sizeY,
					  this.sizeX,
					  this.sizeY,
					  this.x,
					  this.y,
					  this.scale,
					  this.scale);
		if(this.spriteTime == this.nbSprites){
			this.spriteTime = 0;
		}

		if(this.x >= 550){
			this.alive = false;
			spriteBoss.attackedAnime();
		}

		return this.alive;
	}
}
