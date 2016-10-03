var button;

function setup() {
  button = createButton("GO!");
  button.mousePressed(doStuff);
  createCanvas(1000, 500);
  clear();
  colorMode(HSB);
  noStroke();
}

function doStuff() {
  var c = color(random(255), 255, 255);
  var x = random(width);
  var y = random(height);
  var d = random(height/2);
  fill(c);
  ellipse(x,y,d,d);
}
