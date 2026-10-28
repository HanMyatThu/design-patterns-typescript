/**
 * O Stands for Open/Closed Principle
 * which states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
 */

/** Don't Do this */
class Discount {
  private discountRate: number = 0.1; // 10% discount
  getDiscountedPrice(type: "STUDENT" | "CUSTOMER" | "NORMAL"): number {
    if (type === "STUDENT") return 0.5; // 50% discount for students
    if (type === "CUSTOMER") return 0.2; // 20% discount for regular customers
    return this.discountRate;
  }
}

/** 
 * Refactor with OCP
 */
class DiscountStrategy {
  getDiscountedPrice(): number {
    return 0;
  }
}

class StudentDiscount extends DiscountStrategy {
  getDiscountedPrice(): number {
    return 0.5; // 50% discount for students
  } 
}

class CustomerDiscount extends DiscountStrategy {
  getDiscountedPrice(): number {
    return 0.2; // 20% discount for regular customers
  }
}

class DiscountCalculator {
  constructor(private discountStrategy: DiscountStrategy) {}

  calculate(): number {
    return this.discountStrategy.getDiscountedPrice();
  }
}


const discount1 = new DiscountCalculator(new StudentDiscount());
console.log(discount1.calculate()); // Output: 0.5
const discount2 = new DiscountCalculator(new CustomerDiscount());
console.log(discount2.calculate()); // Output: 0.2