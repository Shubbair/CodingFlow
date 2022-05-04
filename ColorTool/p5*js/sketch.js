var img;
var RGB_data = "";
var HEX_data = "";

function preload(){
  img = loadImage("https://happycoding.io/images/stanley-1.jpg");
}

function setup() {
  createCanvas(500, 550);
}

function draw() {
  background(0);
  image(img, 0, 0);
  img.resize(500,500);

  // Get the color at the mouse position
  var c = img.get(mouseX, mouseY);
  // Change the fill to that color
  fill(c);
  stroke(0);
  // Draw a square with that color
  square(mouseX+6, mouseY+6, 30);

  fill(0);
  noStroke();
  rect(0,height,width,50);
  fill(255);
  textSize(20);
  text("Color ",25,height-20);
  textSize(15);
  text(RGB_data,120,height-20);
  text(HEX_data,300,height-20);

}

function mouseReleased(){
  var pos = img.get(mouseX, mouseY);
  var a = str(hex(pos)[0]).slice(-2);  
  var b = str(hex(pos)[1]).slice(-2);
  var c = str(hex(pos)[2]).slice(-2);
  var h = a + b + c;
  RGB_data = "RGB : " + str(int(red(pos)))+" , "+str(int(green(pos))) + " , " + str(int(blue(pos)));
  HEX_data = "HEX : #" + h;
}
