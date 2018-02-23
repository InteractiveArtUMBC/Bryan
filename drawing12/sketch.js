var x = 500;
var y = 500;
var xspeed = 50;
var yspeed = 50;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);


}

function draw() {


x = x + xspeed;

  if (x > windowWidth || x < 10)  {
   xspeed = -xspeed;
 }

 y = y + yspeed;

 if (y > windowHeight || y < 10) {
   yspeed = -yspeed;

 }


 background(0)
 fill(0,255,0)
 stroke(0,255,0)
 strokeWeight(10)
 line(2000,100,x,y)
 line(1500,400,x,y)
 line(100,100,x,y)
 line(600,400,x,y)
 line(100,2000,x,y)
 line(600,1600,x,y)
 line(2000,2000,x,y)
 line(1600,1600,x,y)




}
