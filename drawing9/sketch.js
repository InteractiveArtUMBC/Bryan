var x = 0;




function setup() {
  createCanvas(500, 500);
  frameRate(30);

}

function draw(){
  background(0)
  moon();
  squares();



  x+=1;


  if(x > width-0){
    x = 0;
  }





    ellipse(x,x,300,300)
    stroke(0)
    fill(0)


}

function moon(){
  push();

  pop();

}


function squares(){

  push();
    fill(255,200,0)
    stroke(255,200,0)
    ellipse(250,250,305,305)
    textSize(300);
    textAlign(CENTER);
    stroke(255);
    text('moon');
  pop();
}
