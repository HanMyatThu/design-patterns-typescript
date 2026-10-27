/**
 * Inheritance means a child inherits properties or methods from the parent class.
 * you can achieve inheritance in TypeScript by using the extends keyword.
 * you can also extend that child class again to get the property of the original parent class.
 */

class Animal {
  
  walk(): void {
    console.log("animal is walking...");
  }

  sleep(): void {
    console.log("animal is sleeping...");
  }

  eat(): void {
    console.log("animal is eating...");
  }

  speak(): void {
    console.log("animal is speaking...");
  }
}

class Cat extends Animal {
}

class Kitten extends Cat {
}

const myKitten1 = new Cat();
myKitten1.walk(); // Output: animal is walking...

const myKitten2 = new Kitten();
myKitten2.eat();