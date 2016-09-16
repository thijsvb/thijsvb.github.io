var col = "#0f0";
var buttons = [];
var X = 0;
var Y = 0;

function setup() {
  noCanvas();
  noFill();
  colorMode(HSB);
  frameRate(10);

  for (var y = 0; y != 15; ++y) {
    buttons[y] = [];
    for (var x = 0; x != 30; ++x) {
      buttons[y][x] = createButton('O');
      buttons[y][x].style("border-radius", "20pt");
      buttons[y][x].style("margin", "1px");
      buttons[y][x].style("background-color", "#000");
      buttons[y][x].mousePressed(changeColor);
    }
    createP('');
  }
}

function draw() {
  // for (var y = 0; y != buttons.length; ++y) {
  //   for (var x = 0; x != buttons[y].length; ++x) {
  //     buttons[y][x].style("color", col);
  //   }
  // }

  buttons[Y][X].style("color", col);


  if (X == buttons[0].length-1) {
    ++Y;
    Y %= buttons.length;
  }
  ++X;
  X %= buttons[0].length;
}

function changeColor() {
  col = color(random(255), 255, 255);
}
