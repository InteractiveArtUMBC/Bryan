var x = 180;
var y = 0;
var xspeed = 9;
var yspeed = 10;



function setup() {
  createCanvas(1000, 1000);
  frameRate(30);

}

function draw(){
  background(0)


  x = x + xspeed;

    if (x > windowWidth || x < 1000)  {
     xspeed = -xspeed;
   }

   //bouncing veritcally≠
   y = y + yspeed;

   if (y > windowHeight || y < 0) {
     yspeed = -yspeed;
   }


    ellipse(x,y,50,50)
    rect(150,x,25,100)
    rect(850,x,25,100)
    stroke(0,250,0)
    strokeWeight(5)
    fill(0)
    //bouncing horizontally

}
