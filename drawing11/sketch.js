var x = 1;
var y = 0;
var xspeed = 50;
var yspeed = 100;



function setup() {
  createCanvas(1000, 1000);
  frameRate(100);
  background(0)

}

function draw(){

if (mouseIsPressed){
  x = x + xspeed;

    if (x > windowWidth || x < 10)  {
     xspeed = -xspeed;
   }

   y = y + yspeed;

   if (y > windowHeight || y < 10) {
     yspeed = -yspeed;
   }

    line(50,50,x,y)
    stroke(0)
    strokeWeight(2000)
    fill(0)





}
else {
  x = x + xspeed;

    if (x > windowWidth || x < 10)  {
     xspeed = -xspeed;
   }

   y = y + yspeed;

   if (y > windowHeight || y < 10) {
     yspeed = -yspeed;
   }

    line(x,y,50,50)
    var colors = ['orange','yellow'];
    var color = random(colors);
    stroke(color)
    strokeWeight(30)
    fill(0)

}

push();
stroke(255,240,0)
strokeWeight(5)
fill(255,240,0)
ellipse(100,100,500,500)

pop();

push();
fill(0)
stroke(255)
strokeWeight(5)
triangle(0, 1000, 200, 800, 400, 1000 );
triangle(300,1000,600,600,900,1000)
triangle(600,1000,800,400,2000,1000)
pop();



}
