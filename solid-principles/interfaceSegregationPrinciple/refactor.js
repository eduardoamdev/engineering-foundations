class Bird {
  move() {
    console.log("Moving...");
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Flying high!");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Swimming!");
  }
}

const eagle = new Eagle();
const penguin = new Penguin();

eagle.fly();
penguin.swim();
penguin.move();
