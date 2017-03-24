var things = [];

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent(select("#middle"));
  for(var i=0; i!=3; ++i) {
    things.push(new Thing(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for(var i=0; i!=3; ++i) {
    things[i].update();
    things[i].show();
  }
}
