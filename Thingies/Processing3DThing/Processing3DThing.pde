float r[] = new float[1];
float x[] = new float[1];
float y[] = new float[1];
int i = 0;

void setup() {
  size(1000, 500, P3D);
  stroke(0);
  fill(0, 255, 0, 128);
}

void draw() {
  background(255);
  if (mousePressed) {
    ++r[i];
    x[i] = mouseX;
    y[i] = mouseY;
  }

  for (int j=0; j!=r.length; ++j) {
    if (r[j]>0) {
      pushMatrix();
      translate(x[j], y[j], -r[j]);
      box(50);
      popMatrix();
    }
  }
}

void mouseReleased() {
  r = append(r, 0);
  x = append(x, 0);
  y = append(y, 0);
  ++i;
}