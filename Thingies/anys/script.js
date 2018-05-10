let from, to;
let more, less;

function setup() {
  from = createSelect();
  from.option('W');
  from.option('T');
  from.option('L');
  from.option('E');

  f = select("#from");
  from.parent(f);

  to = createSelect();
  to.option('W');
  to.option('T');
  to.option('L');
  to.option('E');

  t = select("#to");
  to.parent(t);

  more = select("#more");
  less = select("#less");

  more.mouseClicked(addAny);
  less.mouseClicked(useAny);
}

function addAny() {
  giver = from.value();
  taker = to.value();
  console.log(giver+taker);
}

function useAny() {
  giver = from.value();
  taker = to.value();
  console.log(giver+taker);
}
