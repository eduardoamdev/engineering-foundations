class Bird {
  fly() {
    console.log("Flying high!");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

function makeItFly(bird) {
  bird.fly();
}

const sparrow = new Bird();
const penguin = new Penguin();

makeItFly(sparrow);
makeItFly(penguin);
