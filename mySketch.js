let ballchar1=[]
let ballchar2=[]
let explode=[]
let screen=0
let level=0
let score=50
let bestScore=0
let historyScore=0
var songd

function preload(){
	songd=loadSound('Ding.mp3')
	songs=loadSound('Splat.mp3')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	textAlign(CENTER, CENTER)
}


function draw() {
  historyscore()
	bestscore()
	background(255)
	if (screen==0){
		gamestart()
	}
	if (screen==1){
		ballpop()
	}
	if (screen==2){
	 gameover()
	}
}


function gamestart(){
	background(255)
	fill(0)
	textAlign(CENTER, CENTER)
	textSize(40)
	text('PRIME NUMBER GAME',width/2,height*0.3)
	textSize(20)
	text("Click the Prime Number Only and Don't miss them!", width/2,height/2-10)
	text('Level 0 = Elementary School student', width/2,height/2+15)
	text('Level 1 = High School student ', width/2,height/2+40)
	text('Level 2 = College student', width/2,height/2+65)
	text('Level 3 = The master ', width/2,height/2+90)
	fill(255,0,0)
	
	text('Score less than 0 is gameover', width/2,height/2+115)
	text('Come and become prime number master!', width/2,height/2+130)
	fill(255,0,0)
	noStroke()
	rect(width/2-100,height*0.75,200,100)
	fill(255)
	textSize(40)
	text('START', width/2,height*0.75+50)
	
	fill(255,0,0,50)
	ellipse(0,0,width*0.65)
	fill(0,255,0,50)
	ellipse(0,height,width*0.45)
	fill(0,0,255,50)
	ellipse(width,0,width*0.4)
	fill(0,255,255,50)
	ellipse(width,height,width*0.65)
}

function gameover(){
	colorMode(RGB)
	background(255);           
	fill( 0);                       
	textSize(20);                          
	text("History top score", windowWidth/2, windowHeight/15);                             
	text(historyScore, windowWidth/2, windowHeight/7);      
	fill(0)              
	textSize(30);
	text("You reach level "+level, windowWidth/2, windowHeight/2-150);
	fill(255, 0, 0);
	text(student(), windowWidth/2, windowHeight/2-100)     
	textSize(150);
	fill(0)
	text(bestScore, windowWidth/2, windowHeight/2+50);      
	fill(255,0,0);                                 
	noStroke();                           
	rect(width/2-100,height*0.75,200,100);     
	fill(255)                 
	textSize(30);                         
	text('RESTART', width/2,height*0.75+50) 
	
	fill(255,0,0,50)
	ellipse(0,0,width*0.65)
	fill(0,255,0,50)
	ellipse(0,height,width*0.45)
	fill(0,0,255,50)
	ellipse(width,0,width*0.4)
	fill(0,255,255,50)
	ellipse(width,height,width*0.65)
}

function ballpop(){
	colorMode(RGB)
  showscore()
	offscreen()
	
	//explode//
	for(var i=0;i<explode.length;i++){
		explode[i].run()
		if(explode[i].dead){
			explode.splice(i,1);
		}
	} 

	//show level//
	fill(0,50)
	textSize (20)
	text("Level "+level,width/2,height/2+200)
	
	//level 0//
	if(level==0){
		if (frameCount % 65 == 0){
			ballchar1.push(new Ball())
			//explode.push(new Explode())
		}
		if (score>100){
			level=1
		}
	}
	
	//level 1//
	if(level==1){
		if (frameCount % 45 == 0){
			ballchar1.push(new Ball())
			//explode.push(new Explode())
		}
		if (score>200){
			level=2
		}
	}
	
	//level 2//
	if(level==2){
		if (frameCount % 45 == 0){
			ballchar2.push(new Ball2());
			//explode.push(new Explode())
		}
		if (score>300){
			level=3
		}
	}
		
	//level 3//
	if(level==3){
		if (frameCount % 40 == 0){
			ballchar2.push(new Ball2());
		}
	}

	//move and show balls//
	for (let a of ballchar1) {
			a.move()
			a.show()
		}	
	for (let a of ballchar2) {
			a.move()
			a.show()		 
		}
	if (score<0){
			screen=2
		}
}
function student(){
	if (level==0){
		let e="Elementary student"
  	return e
	}
	if (level==1){
		let h="High school student"
  	return h
	}
	if (level==2){
		let c="College student"
  	return c
	}
	if (level==3){
		let m="The Master!"
  	return m
	}
}

function showscore(){
	colorMode(RGB)
	background(255,90)
	fill(0,50);
	textSize(200);
	text(score,width/2,height/2)
}

function restart(){
	for (let a of ballchar1) {
		a.move()
		a.show()			
	}	
	screen=1
	score=50
	bestScore=0
	level=0
}

function historyscore(){
	if(historyScore<score){       
	 historyScore = score;
	 }
}
function bestscore(){
	if(bestScore<score){
		bestScore = score;
	}
}

//no click score"-prime"
function offscreen(){
	for(let i=0 ;i<ballchar1.length; i++){
		if (ballchar1[i].offscreencheck()&&ballchar1[i].primecheck()){
			songs.play()
			score-=ballchar1[i]["n1"]
		  ballchar1.splice(i,1)
			}
		}
	for(let i=0 ;i<ballchar2.length; i++){
		if (ballchar2[i].offscreencheck()&&ballchar2[i].primecheck()){
			score-=ballchar2[i]["n2"]
		  ballchar2.splice(i,1)
			}
	}
}

function mousePressed(){
	//page 0 start botton
	if(mouseY>height*0.75&&
		mouseY<height*0.75+100&&
		mouseX>width/2-100&&
		mouseX<width/2+100&&screen==0){
		screen=1
	}
	
	//page 2 restart botton
	if(mouseY>height*0.75&&
		mouseY<height*0.75+100&&
		mouseX>width/2-100&&
		mouseX<width/2+100&&screen==2){
		restart()	
	}
	
	
	////////////////////////////////Level 0&1 click//////////////////////////////////
	for(let i=0 ;i<ballchar1.length; i++){
	
		//click score"+prime"
		if(ballchar1[i].contain(mouseX,mouseY)&&ballchar1[i].primecheck()){	
			explode.push(new Explode(mouseX, mouseY, ballchar1[i]["n1"],ballchar1[i]["clrh"],50,80))
			songd.play()
			score+=ballchar1[i]["n1"]
			ballchar1.splice(i,1)		
		}

		
	 //click score"-number"
		else if(ballchar1[i].contain(mouseX,mouseY)){
      explode.push(new Explode(mouseX, mouseY, ballchar1[i]["n1"],0,0,50))
			songs.play()
			score-=ballchar1[i]["n1"]
			ballchar1.splice(i,1)
			
			}
	}
	////////////////////////////////Level 2&3 click//////////////////////////////////
	for(let i=0 ;i<ballchar2.length; i++){
		//click score"+prime"
		if(ballchar2[i].contain(mouseX,mouseY)&&ballchar2[i].primecheck()){
			explode.push(new Explode(mouseX, mouseY, ballchar2[i]["n2"],ballchar2[i]["clrh"],50,80))
			songd.play()
			score+=ballchar2[i]["n2"]
			ballchar2.splice(i,1)
			
			}
		else if(ballchar2[i].contain(mouseX,mouseY)){
			explode.push(new Explode(mouseX, mouseY, ballchar2[i]["n2"],0,0,50))
			songs.play()
			score-=ballchar2[i]["n2"]
			ballchar2.splice(i,1)
			
			}
	}
	
}

