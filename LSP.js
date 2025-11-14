class Bird {
  fly() {
    console.log("This bird can fly");
  }
}
class Sparrow extends Bird {
  fly() {
    console.log("Sparrow flying...");
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Eagle soaring high...");
  }
}
function makeBirdFly(bird) {
  bird.fly(); // Works for all subclasses
}

makeBirdFly(new Sparrow());
makeBirdFly(new Eagle());


// This violates LSP because Penguin cannot be substituted for bird
class Penguin extends Bird {
  fly() {
    throw new Error("Penguins cannot fly!");
  }
}


class BirdLSP {}

class FlyingBirdLSP extends BirdLSP {
  fly() {
    console.log("Flying...");
  }
}

class SparrowLSP extends FlyingBirdLSP {}

class EagleLSP extends FlyingBirdLSP {}

class PenguinLSP extends BirdLSP {
  swim() {
    console.log("Penguin swimming...");
  }
}