var button;
var disks = [];
var index = 0;

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
  disks[index] = new Disk(random(width), random(height));
  
  fill(disks[index].col);
  ellipse(disks[index].x, disks[index].y, disks[index].dia(), disks[index].dia());
  ++index;
}


function Disk(x, y) {
  this.x = x;
  this.y = y;
  this.min = 10;
  this.max = 100;
  this.rad = this.min
  this.dia = function(){return this.rad*2;};
  this.col = color(random(255), 255, 255);
  this.olap = function(other) {
    if (dist(this.x, this.y, other.x, other.y) < (this.rad + other.rad) || this.dia() >= this.max) {
      return true;
    } else {
      return false;
    }
  };
}
