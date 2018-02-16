var x = 0;
var y = 500;



function setup() {
  createCanvas(500, 500);
  frameRate(30);

}

function draw(){
  background(255)
  squares();


  x+=5;
  y-=5;

  if(x > width-50){
    x = 0;
  }

  if(y < width-500){
    y=500;
  }



    ellipse(x,x,x,x)
    ellipse(y,y,y,y)
    stroke(255)
    fill(255)


}

function squares(){

  push();
    fill(0)
    stroke(0)
    ellipse(150,150,300,300)
  pop();
}
