var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine, world;

var thing, ground;

function setup() {
  engine = Engine.create();
  world = engine.world;

  thing = Bodies.rectangle(250, 100, 50, 25, {
    restitution: 1
  });
  ground = Bodies.rectangle(250, 450, 1000, 100, {
    angle: PI / 8,
    isStatic: true
  });
  World.add(world, [thing, ground]);

  var canvas = createCanvas(500, 500);
  var p = select("#middle");
  canvas.parent(p);

  rectMode(CENTER);
  noFill();
  stroke(0, 255, 0);
}

function draw() {
  background(0);
  Engine.update(engine);

  push();
  translate(thing.position.x, thing.position.y);
  rotate(thing.angle);
  rect(0, 0, 50, 25);
  pop();

  push();
  translate(ground.position.x, ground.position.y);
  rotate(ground.angle);
  rect(0, 0, width * 2, 100);
  pop();
}
