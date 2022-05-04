PImage img;

String RGB_data = "";
String HEX_data = "";

void setup() {
  img = loadImage("https://happycoding.io/images/stanley-1.jpg");
  size(500, 550);
}

void draw() {
  background(0);
  image(img, 0, 0);
  img.resize(500,500);

  // Get the color at the mouse position
  int c = img.get(mouseX, mouseY);
  // Change the fill to that color
  fill(c);
  // Draw a square with that color
  square(mouseX+6, mouseY+6, 30);
  //fill(255);
  //String[] g = split(hex(c),"FF");
  //text("RGB : " +str(int(red(c)))+' '+str(int(green(c))) + ' ' + str(int(blue(c))),mouseX + 10,mouseY);
  //text(join(g,' '),mouseX+10,mouseY+20);
  
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

void mouseReleased(){
  int c = img.get(mouseX, mouseY);
  String[] g = split(hex(c),"FF");
  RGB_data = "RGB : " + str(int(red(c)))+" , "+str(int(green(c))) + " , " + str(int(blue(c)));
  HEX_data = "HEX : #" + join(g,' ');
}
