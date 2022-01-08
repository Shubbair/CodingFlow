var increment = 0.01;

function setup(){
  createCanvas(400,400);

  pixelDensity(1);
}

function draw(){
  var yoff = 0;

  loadPixels();
  for(let x = 0 ; x < width ; x++ ){
    var xoff = 0;
    for(let y = 0 ; y < width ; y++ ){
      var index = (x + y * width) * 4;
      var col = noise(xoff,yoff) * 255;
      pixels[index + 0] = col;
      pixels[index + 1] = col;
      pixels[index + 2] = col;
      pixels[index + 3] = 255;

      xoff += increment;
    }
    yoff += increment;
  }
  
  updatePixels();
  
  noLoop();
}


