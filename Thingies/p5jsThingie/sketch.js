var canvas;
var d = 10;
var button;
var textfield;
var inputText = "";
var userIsTyping = false;

function setup() {
  canvas = createCanvas(1000, 500);
  canvas.mousePressed(grow);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(32);

  createP('');
  button = createButton("Reset!");
  button.style("background-color", "#080");
  button.style("color", "#aaa");
  button.style("border", "none");
  button.style("border-radius", "20px");
  button.mousePressed(reset);

  createP('');
  textfield = createInput("Type something here!");
  textfield.style("background-color", "#080");
  textfield.style("color", "#aaa");
  textfield.style("border", "none");

  textfield.input(typing);
  textfield.changed(showText);
}

function draw() {
  background(0, 180, 0);
  fill(64, 255, 0);
  ellipse(width / 2, height / 2, d, d);
  fill(64, 64, 64);
  text(inputText, width / 2, height / 4);
  if (userIsTyping) {
    text(". . .", width / 2, height * 3 / 4)
  }
}

function grow() {
  d += d;
}

function typing() {
  userIsTyping = true;
}

function showText() {
  inputText = textfield.value();
  createP(inputText);
  userIsTyping = false;
}

function reset() {
  d = 5;
  inputText = "";
}
