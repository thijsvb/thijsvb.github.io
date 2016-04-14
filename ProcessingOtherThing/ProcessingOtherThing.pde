void setup(){
  size(1000,500);
  noFill();
  stroke(0,128,0);
}

void draw(){
  background(0);
  for(int i=0; i!=width; i+=50){
    line(i,0,mouseX,mouseY);
    line(i,height,mouseX,mouseY);
  }
}