var drops_length = 200;
var drops = []; 

function setup() {
  createCanvas(600, 400); 
  for (var i = 0; i < drops_length; i++) { 
    drops[i] = new Drop();
  }
}

function draw() {
  background(10);
  for (var i = 0; i < drops_length; i++) {
    drops[i].fall(); 
    drops[i].show(); 
  }
}
