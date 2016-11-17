var bf, code, email, loaded, path = [];

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
}
