var bf, code, email;

function setup() {
  var can = createCanvas(400, 100);
  var middle = select("#middle");
  can.child(middle);
  bf = new BFJSInterpreter();
  loadStrings("email.txt", gotCode);
}

function gotCode(txt) {
  code = txt[0];
  
  bf.execute(code);
  email = bf.outStream;
  
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  text(email, width/2, height/2);
}
