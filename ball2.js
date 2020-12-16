class Ball2 {

	constructor(){

		this.speed = random(110,130);
		this.deltaTime = 0.01;
		this.endTime = 10.0;
		this.x = random(width*0.2,width*0.8); //start in screen
		this.y = height;
		this.ay = 10;//gravity
		this.ax = 0;
		this.angle =-random(80,100)	
		//this.size=80	
		this.vx = this.speed*Math.cos(this.angle*(Math.PI/180.0))
		this.vy = this.speed*Math.sin(this.angle*(Math.PI/180.0))
		colorMode(HSB)
		this.clrh=random(0,300)
		this.clr =color(this.clrh,50,85)
		this.n2 = floor(random(2,113))
		this.p1=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113]
		this.newsize=map(this.n2,2,100,60,120)
	}
	
	move(){

		for (let i=0;i < this.endTime;i++){	
				this.x += this.vx*this.deltaTime;
				this.y += this.vy*this.deltaTime;
				this.vx += this.ax*this.deltaTime;
				this.vy += this.ay*this.deltaTime;
				}
		}

	show(){	
		
		noStroke()
		fill(this.clr)
		ellipse(this.x,this.y,this.newsize,this.newsize)
		fill(255)
		textSize(random(30,35))
		textAlign(CENTER, CENTER)
		text(this.n2,this.x,this.y)
	}
	
	
  contain(x,y){			
			
		 this.d= dist(x,y,this.x,this.y)
		 if(this.d<this.newsize/2){
		 	return true
		 }	
		 else	{
			return false
		 }

		}	
	
	
	//level 2 check
	primecheck(){
		for(let i of this.p1){
			if(this.p1.includes(this.n2)){
				  return true
				}
				else{
					return false
	        }		
}	
	}
	
	offscreencheck(){
	   if(this.y>height){
		  return true
		 }
		 else{
			return false 
		}
	
	}
	
	
}
