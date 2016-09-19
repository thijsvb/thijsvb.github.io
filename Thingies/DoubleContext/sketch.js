var thing;

function setup(){
  var a = selectAll(".a");
  var b = selectAll(".b");

  for(var i=0; i!=a.length; ++i){
    a[i].mousePressed(makeButton);
  }
  for(var i=0; i!=b.length; ++i){
    b[i].mousePressed(makeP);
  }
}

function makeButton(){
  var button = createButton("Press me!");
  button.mousePressed(changeColor);
  thing = this;
}

function makeP(){
  var p = createP("Click me!");
  p.mousePressed(changeColor);
  thing = this;
}

function changeColor(){
  // this.this.style("background-color", "#0f0");     //This doesn't work D:
  thing.style("background-color", "#0f0");
}
