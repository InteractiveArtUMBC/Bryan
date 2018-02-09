function setup() {
createCanvas(1000, 1000);
background(0)


}

var value = 0;
function draw() {

  fill(0)
  stroke(255)
  ellipse(500, 500, 250, 250);
  line(500,625,500,800);
  line(500,800,600,900);
  line(500,800,400,900);
  line(500,700,600,700);
  line(500,700,400,700);
  fill(value);
  stroke(0)
  ellipse(800,200,150,250);




}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
