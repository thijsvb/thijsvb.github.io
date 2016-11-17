var bf, code, email, loaded;
var path = [];
var following = false;

function setup() {
  var can = createCanvas(400, 100);
  var middle = select("#middle");
  middle.child(can);
  bf = new BFJSInterpreter();
  loadStrings("email.txt", gotCode);
  
  for (var i=0; i!=width; ++i) {
    path[i] = pathPoint(i);
  }
  
  fill(255);
  stroke(0, 176, 0);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function gotCode(txt) {
  code = txt[0];
  bf.execute(code);
  email = bf.outStream;
  loaded = true;
}

function pathPoint(x) {
  noiseSeed(58045351613);
  var off = x/100;
  var y = noise(off) * height;
  return new p5.Vector(x, y);  
}

function draw() {
  background(32);
  if(!loaded) return;
  
  for(var i=0; i!=path.length; ++i) {
    point(path[i].x, path[i].y);
  }
  
  if (following){
    ellipse(mouseX, mouseY, 20, 20);
    var onLine = false;
    for (var i=0; i!=path.length; ++i){
      if (dist(mouseX, mouseY, path[i].x, path[i].y) < 10) onLine = true;
    }
    if (!onLine) following = false;
  } else {
    ellipse(0, path[0].y, 20, 20);
    if (dist(mouseX, mouseY, 0, path[0].y) < 10) following = true;
  }
}
