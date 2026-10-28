"use strict";
/**
 * usually use abstract class or interface to achieve abstraction
 * use implements keyword to implement an interface in a class
 * abstract class is a class that cannot be instantiated and is often used as a base class for other classes.
 */
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
function getArea(shape) {
    return shape.area();
}
console.log(getArea(new Circle(5))); // Output: 78.53981633974483
console.log(getArea(new Rectangle(4, 6))); // Output: 24
