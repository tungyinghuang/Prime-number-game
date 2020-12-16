function Particle(x,y,clr,s,b) { //update params
	
	this.accel = 0.96; //gravity
	this.grav = 0.04; //gravity
	this.velX = random(-10, 10);
	this.velY = random(-10, 10);
	this.locX = x;
	this.locY = y;
	this.r = random(10,20);
	this.life = 1;

	this.updateP = function() {
		this.velY*= this.accel;
		this.velY -= this.grav;
		this.velX*= this.accel;
		this.locX -= this.velX;
		this.locY -= this.velY;
		this.life -= 0.01;

	}

	this.renderP = function() {
		noStroke();
		push();
		  colorMode(HSB)
			fill(clr,s,b,this.life);
			translate(this.locX, this.locY);
			ellipse(0,0,this.r);
			fill(255,this.life/10*0.01);		
			
		pop();
	}
}

function Explode(eX, eY, num, clr, s, b) {
	this.particles = [];
	this.life = 400;
	this.dead = false;

	for (var i = 0; i < num; i++) {
	this.particles.push(new Particle(eX, eY,clr,s,b));
		}


	this.run = function() {
		for (var i = 0; i < this.particles.length; i++) {
			//update each particle per frame
			this.particles[i].updateP();
			this.particles[i].renderP();
			this.life-=0.3;
			if(this.life<=0){
				this.dead = true;
			}
		}
	}
}

