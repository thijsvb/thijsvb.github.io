var button;
var disks = [];
var go = false;

function setup() {
  button = createButton("GO!");
  button.mousePressed(startStuff);
  createP('');
  createCanvas(1000, 500);
  clear();
  colorMode(HSB);
  noStroke();
}

function draw() {
  if(go){
    doStuff();
  }
}

function startStuff() {
  disks = [];
  go = true;
}

function doStuff() {
  var d = new Disk(random(width), random(height));
  
  while(d.olap(disks)) {
    d.x = random(width);
    d.y = random(height);
  }
  
  fill(d.col);
  ellipse(d.x, d.y, d.dia(), d.dia());
  disks[disks.length] = d;
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
    for(var i=0; i!=other.length; ++i){
      if (dist(this.x, this.y, other[i].x, other[i].y) < this.rad + other[i].rad) {
        return true;
      }
    }
    return false;
  };
}
