function Thing(x,y) {
  this.pos = createVector(x,y);
  this.vel = createVector();
  this.acc = createVector();
}

Thing.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Thing.prototype.addForce = function(force) {
  this.acc.add(force);
}

Thing.prototype.show = function() {
  stroke(255);
  noFill();
  ellipse(this.pos.x, this.pos.y, 10, 10);
}
