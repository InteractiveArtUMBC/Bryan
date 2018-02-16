function setup() {
  createCanvas(1100, 500);

}
function draw(){
background(255,204,0)
var words = ['stop','go','yield'];
var word = random(words);
text(word, 50,300);
textSize(400)
fill(0)
stroke(0)
frameRate(5)


}
