function Connection(a, b, s) {
  this.a = a;
  this.b = b;
  this.strength = s;
}

Connection.prototype.pull = function() {
  var dir = this.b.pos.copy();
  dir.sub(this.a.pos);
  dir.setMag(this.strength);
  this.a.addForce(dir);

  var dir = this.a.pos.copy();
  dir.sub(this.b.pos);
  dir.setMag(this.strength);
  this.b.addForce(dir);
}

Connection.prototype.show = function() {
  stroke(255 * this.strength);
  line(this.a.pos.x, this.a.pos.y, this.b.pos.x, this.b.pos.y)
}
