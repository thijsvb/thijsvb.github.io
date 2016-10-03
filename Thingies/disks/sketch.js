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
  disks[index] = new disk(random(width), random(height));
  var grow = true;
  while(grow) {
    ++disks[index].dia;
    for(var i=0; i!=disks.length; ++i) {
      if(disks[index].olap(disks[i] && i != index)) {
        grow = false;
        return;
      }
    }
  }
  --disk[index].dia;
  fill(disks[index].c);
  ellipse(disks[index].x, disks[index].y, disks[index].dia, disks[index].dia);
  ++index;
}


function disk(x, y) {
  this.x = x;
  this.y = y;
  this.min = 10;
  this.max = 100;
  this.dia = this.min;
  this.col = color(random(255), 255, 255);
  this.olap = olap;
}

function olap(other) {
  if(dist(this.x, this.y, other.x, other.y) < (this.dia/2 + other.dia/2) || this.dia >= this.max) {
    return true;
  }
  else {
    return false;
  }
}
