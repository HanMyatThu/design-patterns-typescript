/**
 * Polymorphism is a concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. 
 * It enables a single interface to represent different underlying forms (data types). 
 * In TypeScript, polymorphism can be achieved through method overriding and interfaces.
 */

class Dog extends Animal {
  eat() {
    console.log("dog is eating...");
  }
}


class Puppy extends Dog {
  eat() {
    super.eat();
    console.log("puppy is eating...");
  }
}