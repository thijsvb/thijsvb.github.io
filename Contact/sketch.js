function setup() {
  noCanvas();
  brainfuck = new Brainfuck(new BrainfuckMemoryInfinite());
  brainfuck.code.source('+++.[-].');
  brainfuck.run(done);
}

function done() {
  console.log("done!");
}
