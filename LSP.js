/*
In JavaScript, since it uses prototypal inheritance, the Liskov Substitution Principle can be a bit abstract, but it's still applicable.
*/

// Illustrating LSP
class Bird {
    fly() {
        console.log("Flying");
    }
}

class Duck extends Bird {
    quack() {
        console.log("Quack");
    }
}

class Ostrich extends Bird {
    fly() {
        throw new Error("Cannot fly"); // Violates LSP
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const duck = new Duck();
const ostrich = new Ostrich();

makeBirdFly(duck); // Fine
// makeBirdFly(ostrich); // Error: Not fine, violates LSP

// Refactored to adhere to LSP
class Bird {
}

class FlyingBird extends Bird {
    fly() {
        console.log("Flying");
    }
}

class NonFlyingBird extends Bird {
}

class Duck extends FlyingBird {
    quack() {
        console.log("Quack");
    }
}

class Ostrich extends NonFlyingBird {
    // No fly method here
}
