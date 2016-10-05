var goButton, hoButton;
var disks = [];
var tCol, mCol, bCol;
var go = false;

function setup() {
  goButton = createButton("GO!");
  goButton.mousePressed(startStuff);
  hoButton = createButton("HO!");
  hoButton.mousePressed(stopStuff);
  var ln = createP('');
  var can = createCanvas(1000, 500);

  var middle = select('#middle');
  middle.child(goButton);
  middle.child(hoButton);
  middle.child(ln);
  viddle.child(can);
  
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
  var h = random(255);
  tCol = color(h, 255, 255);
  mCol = color((h+75)%256, 255, 255);
  bCol = color((h+171)%256, 255, 255);
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
  var d = new Disk(random(width), random(height), tCol, mCol, bCol);

  var count = 0;
  while(d.olap(disks)) {
    d.x = random(width);
    d.y = random(height);

    if(++count > 1000) return;
  }

  while(!d.olap(disks)) {
    ++d.rad;
  }
  --d.rad;

  fill(d.col());
  ellipse(d.x, d.y, d.dia(), d.dia());
  disks[disks.length] = d;
}


function Disk(x, y, colA, colB, colC) {
  this.x = x;
  this.y = y;
  this.min = 5;
  this.max = 75;
  this.rad = this.min
  this.dia = function(){return this.rad*2;};
  this.col = function(){
    if(this.y < height/2){
      return lerpColor(colA, colB, this.y/(height/2));
    } else {
      return lerpColor(colB, colC, (this.y-height/2)/(height/2));
    }
  };
  this.olap = function(other) {
    if(this.rad > this.max) {
      return true;
    }

    for(var i=0; i!=other.length; ++i){
      if (dist(this.x, this.y, other[i].x, other[i].y) < this.rad + other[i].rad) {
        return true;
      }
    }
    return false;
  };
}
