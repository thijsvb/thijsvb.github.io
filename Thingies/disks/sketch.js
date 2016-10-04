var goButton;
var hoButton;
var disks = [];
var go = false;

function setup() {
  goButton = createButton("GO!");
  goButton.mousePressed(startStuff);
  hoButton = createButton("HO!");
  hoButton.mousePressed(stopStuff);
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
  clear();
  disks = [];
  go = true;
}

function stopStuff() {
  if(go) {
    go = false;
  } else {
    clear();
  }
}

function doStuff() {
  var d = new Disk(random(width), random(height));
  
  var count = 0;
  while(d.olap(disks)) {
    d.x = random(width);
    d.y = random(height);
    
    if(++count > 1000) break;
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
