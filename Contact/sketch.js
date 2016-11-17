var bf, code, email;

function setup() {
  var can = createCanvas(400, 100);
  var middle = select("#middle");
  middle.child(can);
  bf = new BFJSInterpreter();
  loadStrings("email.txt", gotCode);
}

function gotCode(txt) {
  code = txt[0];
  
  bf.execute(code);
  email = bf.outStream;
  
  background(32);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(email, width/2, height/2);
}
