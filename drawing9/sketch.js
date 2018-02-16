var x = 0;




function setup() {
  createCanvas(500, 500);
  frameRate(30);

}

function draw(){
  background(0)
  word();
  moon();



  x+=1;


  if(x > width-0){
    x = 0;
  }





    ellipse(x,x,300,300)
    stroke(0)
    fill(0)


}

function word(){
  push();
  var millisecond = millis();
    fill(255)
    textSize(20)
    text('\n' + millisecond, 5, 470);



  pop();

}


function moon(){

  push();
    fill(255,200,0)
    stroke(255,200,0)
    ellipse(250,250,305,305)
  pop();
}
