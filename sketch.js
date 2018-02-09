


function setup() {
createCanvas(1000, 1000);
background(255)


}



function draw() {
quad(400, 400, 800, 300, 900, 700, 300, 600);
fill(0,0,255)
quad(200, 200, 500, 100, 500, 500, 100, 300);
line(100, 300, 300, 600);
line(500, 500, 900, 700);
line(500, 100, 800, 300)

circles(50,50)
circles(100,100)
circles(150,150)



if (keyIsPressed === true) {
  fill(255,0,0);
} else {
  fill(0,255,0);
}

}

function circles(x,y){
  ellipse(x,y,50,50)
}
