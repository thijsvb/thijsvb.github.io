function Connection(a, b, s) {
  this.a = a;
  this.b = b;
  this.strength = s;
}

Connection.prototype.pull = function() {
  // F = C * u
  var u = p5.Vector.dist(this.a.pos, this.b.pos) * this.strength;
  var dir = this.a.pos.copy().sub(this.b.pos).setMag(u);
  this.b.addForce(dir);

  var odir = this.b.pos.copy().sub(this.a.pos).setMag(u);
  this.a.addForce(odir);
}

Connection.prototype.show = function() {
  stroke(255 * this.strength);
  line(this.a.pos.x, this.a.pos.y, this.b.pos.x, this.b.pos.y)
}
