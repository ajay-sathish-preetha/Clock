var sc,mn,hr;
var scAngle,mnAngle,hrAngle;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,0,0);
  angleMode(DEGREES);
  //all time related function needs to be in function draw;
   sc = second();
   mn = minute()
   hr = hour();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  translate(200,200);
  rotate(-90); 

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill()
  stroke(255,0,0);
  strokeWeight(7);
  arc(0,0,300,300,0,scAngle);
 
  stroke(0,255,0);
  strokeWeight(7);
  arc(0,0,280,280,0,mnAngle);
 
  stroke(0,0,255);
  strokeWeight(7);
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}