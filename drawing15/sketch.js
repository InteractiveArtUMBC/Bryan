function setup() {
  createCanvas(1000, 1000);
  frameRate(1000)
}

function draw() {
  background(0);
var a = random(0,1000)
var b = random(0,1000)
var c = random(0,1000)
var d = random(0,1000)

push();

fill('yellow')
star(a, b, 5, 10, 5);
star(c,d,5,10,5)

pop();
}

function star(x, y, radius1, radius2, npoints) {
var angle = TWO_PI / npoints;
var halfAngle = angle/2.0;
beginShape();
for (var a = 0; a < TWO_PI; a += angle) {
  var sx = x + cos(a) * radius2;
  var sy = y + sin(a) * radius2;
  vertex(sx, sy);
  sx = x + cos(a+halfAngle) * radius1;
  sy = y + sin(a+halfAngle) * radius1;
  vertex(sx, sy);
}
endShape(CLOSE);
}
