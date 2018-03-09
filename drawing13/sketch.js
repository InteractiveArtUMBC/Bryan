
var osc, fft;




function setup() {




  createCanvas(windowWidth, windowHeight);
  frameRate(100);
  background(0)
  noCursor();
  



  osc = new p5.TriOsc();
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();


}







function draw(){

  var waveform = fft.waveform();


    var freq = map(mouseX, 0, width, 40, 880);
    osc.freq(freq);

    var amp = map(mouseY, 0, height, 1, .01);
    osc.amp(amp);


if (mouseIsPressed){
      push();
          var x = random(200,600)
          var y = random(200,600)

            fill(0)
            ellipse(mouseX,mouseY,x,x);

            var freq = map(x, 0, width, 0, 200);
            osc.freq(freq);

            var amp = map(y, 0, height, 5, 2);
            osc.amp(amp);


      pop();
} else {

  push();
    var n = random(100,200)
    var m = random(100,200)

        fill(0)
        ellipse(mouseX,mouseY,n,m);
  pop();


}





  for (var i = 0; i < windowHeight; i++) {
      var a = random(0, windowWidth);




      var colors = [ 'orange','red'];
      var color = random(colors);

        ellipse (a,i,10,5);
        fill(color);
        strokeWeight(2);

}



}
