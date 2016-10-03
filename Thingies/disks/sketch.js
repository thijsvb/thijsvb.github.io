var button;

function setup() {
  button = createButton("GO!");
  button.mousePressed(doStuff);
  createP('');
  createCanvas(1000, 500);
  clear();
  colorMode(HSB);
  noStroke();
}

function doStuff() {
  var d = new disk(random(width), random(height));
  fill(d.c);
  ellipse(d.x,d.y,d.d,d.d);
}


function disk(x, y) {
  this.x = x;
  this.y = y;
  this.min = 10;
  this.max = 100;
  this.d = this.min;
  this.c = var c = color(random(255), 255, 255);
}
