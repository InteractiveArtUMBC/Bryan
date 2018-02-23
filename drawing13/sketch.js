



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);


}

function draw(){



  for (var i = 0; i < windowHeight; i++) {
      var r = random(0, windowWidth);




      var colors = ['red', 'orange']
      var color = random(colors)

        ellipse (r,i,10,5);
        fill(color)
        strokeWeight(2);

}

}
