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
  console.log(disks);
  var grow = true;
  while (grow) {
    ++disks[index].dia;

    for (var i = 0; i != index; ++i) {
      if (disks[index].olap(disks[i])) {
        grow = false;
        break;
      }
    }
  }
  --disk[index].dia;
  fill(disks[index].col);
  ellipse(disks[index].x, disks[index].y, disks[index].dia, disks[index].dia);
  ++index;
}


function Disk(x, y) {
  this.x = x;
  this.y = y;
  this.min = 10;
  this.max = 100;
  this.dia = this.min;
  this.col = color(random(255), 255, 255);
  this.olap = function(other) {
    console.log(this.dia);

    if (this.dia > width) {
      stoppit
    }
    if (dist(this.x, this.y, other.x, other.y) < (this.dia / 2 + other.dia / 2) || this.dia >= 100) {
      return true;
    } else {
      return false;
    }
  };
}
