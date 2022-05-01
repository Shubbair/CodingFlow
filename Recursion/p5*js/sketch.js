function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(0);
    stroke(255);
    strokeWeight(0.5);
    noFill();
    drawCircle(300, 300, 300);
    noLoop();
  }
  
  function drawCircle(x, y, d) {
    ellipse(x, y, d,d);
    if (d > 2) {
      let newD = d * 0.5;
      drawCircle(x + newD, y, newD);
      drawCircle(x - newD, y, newD);
      drawCircle(x, y + d * 0.4, d * 0.4);
      drawCircle(x, y - d * 0.4, d * 0.4);
    }
  }
  