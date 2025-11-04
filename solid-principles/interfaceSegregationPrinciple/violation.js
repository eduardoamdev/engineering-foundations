class Bird {
  fly() {
    console.log("Flying high!");
  }

  swim() {
    console.log("Swimming!");
  }
}

class Eagle extends Bird {}

class Penguin extends Bird {}

const eagle = new Eagle();
const penguin = new Penguin();

eagle.fly();
penguin.swim();
penguin.fly();
