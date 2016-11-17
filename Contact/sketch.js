var bf, code, email, loaded;

function setup() {
  var can = createCanvas(400, 100);
  var middle = select("#middle");
  middle.child(can);
  bf = new BFJSInterpreter();
  loadStrings("email.txt", gotCode);
  
  background(32);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function gotCode(txt) {
  code = txt[0];
  bf.execute(code);
  email = bf.outStream;
  loaded = true;
}

function draw() {
  if(!loaded) return;
  text(email, mouseX, mouseY);
}
