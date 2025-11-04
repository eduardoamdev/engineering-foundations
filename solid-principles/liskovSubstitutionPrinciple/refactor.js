class Bird {
  move() {
    console.log("Moving...");
  }
}

class Eagle extends Bird {
  move() {
    console.log("Flying high!");
  }
}

class Penguin extends Bird {
  move() {
    console.log("Swimming!");
  }
}

function makeItMove(bird) {
  bird.move();
}

const sparrow = new Eagle();
const penguin = new Penguin();

makeItMove(sparrow);
makeItMove(penguin);
