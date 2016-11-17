var bf, code, email;

function setup() {
  var can = createCanvas(800, 400);
  var middle = select("#middle");
  can.child(middle);
  bf = new BFJSInterpreter();
  loadStrings("email.txt", gotCode);
}

function gotCode(txt) {
  code = txt[0];
  
  bf.execute(code);
  email = bf.outputStream;
  
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  text(email, width/2, height/2);
}
