var things = [];
var connections = [];

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent(select("#middle"));
  for (var i = 0; i != 3; ++i) {
    things.push(new Thing(random(width), random(height)));
  }
  connections.push(new Connection(things[0], things[1], 0.01));
  connections.push(new Connection(things[1], things[2], 0.01));
  connections.push(new Connection(things[0], things[2], 0.01));

}

function draw() {
  background(0);
  for (var i = 0; i != things.length; ++i) {
    for (var j = 0; j != things.length; ++j) {
      if(i != j) things[i].repel(things[j]);
    }
    things[i].update();
    things[i].show();
  }
  for (var i = 0; i != connections.length; ++i) {
    connections[i].show();
    connections[i].pull();
  }
}
