Ship ship;
ArrayList<Bullet> bullets = new ArrayList<Bullet>();
Invaders[] invaders = new Invaders[6];

void setup(){
  size(600,400);
  
  ship = new Ship();
  
  for (int i = 0; i < invaders.length; i++) {
    invaders[i] = new Invaders(i*80+80, 60);
  }
}

void draw(){
  background(0);
  
  ship.update();
  ship.show();
  
  boolean edge = false;

  for (int i = 0; i < invaders.length; i++) {
    invaders[i].show();
    invaders[i].move();
    if (invaders[i].x > width - invaders[i].r || invaders[i].x < invaders[i].r) {
      edge = true;
    }
  }

  if (edge) {
    for (int i = 0; i < invaders.length; i++) {
      invaders[i].shiftOpposit();
    }
  }
  
  for (Bullet d : bullets) {
    d.update(-6);
    d.show();
    
    for (int j = 0; j < invaders.length-1; j++) {
      if (d.hits(invaders[j])) {
        invaders[j].grow();
        d.removeit();
      }
    }
    
    if(d.overflow()){
      d.removeit();
    }
  }

  for (int i = bullets.size()-1; i >= 0; i--) {
    Bullet d = bullets.get(i);
    if (d.toDelete) {
      bullets.remove(i);
    }
  }
}

void keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

void keyPressed() {
  if(key == ' '){
    Bullet b = new Bullet(ship.x+25,ship.y-50);
    bullets.add(b);
  }
  
  if (keyCode == RIGHT) {
    ship.setDir(1);
  } else if (keyCode == LEFT) {
    ship.setDir(-1);
  }
}
