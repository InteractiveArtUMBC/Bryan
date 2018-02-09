function setup() {
  createCanvas(500, 500, WEBGL);

}

function squares(x,y){
  rect(x,y,50,50)
}


function draw(){
  background(0)
  rotateX(millis() / 5000);
  rotateY(millis() / 500);
  rotateZ(millis() / 6000);
  squares(0,0);
  squares(50,50);
  squares(100,0);
  squares(0,100);
  squares(100,100);
  squares(150,150);
  squares(0,200);
  squares(200,0);
  squares(50,150);
  squares(150,50);
  squares(100,200);
  squares(200,200);
  squares(200,100);
  stroke(255);
  fill(255)

}
