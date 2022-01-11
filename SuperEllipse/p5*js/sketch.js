function setup() {
  createCanvas(500, 500);
}

function sgn(val) {
  if (val == 0) {
    return 0;
  }
  return val / abs(val);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);

  let a = 100;
  let b = 100;
  let n =  map((mouseX),0,width,0.3,8);
  stroke(255);
  noFill();

  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {
    let x = pow(abs(cos(angle)), 2/n) * a * sgn(cos(angle));
    let y = pow(abs(sin(angle)), 2/n) * b * sgn(sin(angle));
    vertex(x, y);
  }
  endShape(CLOSE);
}