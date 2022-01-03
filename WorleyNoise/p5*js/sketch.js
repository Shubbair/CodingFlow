let num_point = 100;
let points = [];

function setup() {
  createCanvas(100, 100);
  for (let i = 0; i < num_point; i++) {
    points[i] = createVector(random(width), random(height));
  }
}

function draw() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      let distances = [];
      for (let i = 0; i < points.length; i++) {
        let v = points[i];
        let d = dist(x, y, v.x, v.y);
        distances[i] = d;
      }
      // TODO: usign only red channel for gray scale image
      let sorted = sort(distances);
      let red = map(sorted[0], 0, 50, 0, 255);
      // let green = map(sorted[1], 0, 50, 255, 0);
      // let blue = map(sorted[2], 0, 200, 255, 0);
      let index = (x + y * width) * 4;
      pixels[index + 0] = red;
      pixels[index + 1] = red;
      pixels[index + 2] = red;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
