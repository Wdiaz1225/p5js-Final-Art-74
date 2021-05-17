var lit3 = 0;
var lit2 = 0;
var lit = 0;
var sky2 = 255;
var sky1 = 255;
var circleX = 100;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(sky2,0,sky1);
  
   //sun
  stroke(255,204,0)
  fill(255,214,0)
  circle( 200,circleX,230);
  
  sky2 = sky2 -.35;
  sky1 = sky1 -.35;
  circleX = circleX +.5;
  
  //Floor
  fill(0,100,100)
  rect(0,250,400,350)
  
  //Hills
  stroke(0,100,100)
  triangle(320, 100, 150, 350, 500, 350);
  triangle(80, 150, -100, 350, 350, 350);
  
  //Tent
  stroke(139,0,0)
  fill(139,0,0)
  triangle(150, 300, 110, 370, 180, 370);
  fill(lit2,lit3,lit)
  triangle(150, 318, 130, 370, 150, 370);
  
  stroke(0,80,2)
  fill(0,120,2)
  
   beginShape();
  vertex(300, 70);
  vertex(260, 150);
  vertex(280, 150);
  vertex(220, 230);
  vertex(260, 230);
  vertex(190, 310);
  vertex(280, 310);
  vertex(280, 350);
  vertex(320, 350);
  vertex(320, 310);
  vertex(410, 310);
  vertex(340, 230);
  vertex(380, 230);
  vertex(320, 150);
  vertex(340, 150);
  endShape(CLOSE);
  
  lit = lit +.55;
  lit2 = lit2 +.55;
  lit3 = lit3 +.55;
  
}



