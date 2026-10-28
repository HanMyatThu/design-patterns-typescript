/**
 * Dependency Inversion Principle (DIP)
 * High-level modules should not depend on low-level modules.
 * Both should depend on abstractions.
 */

/**
 * Bad design: PaymentService depends directly on a specific payment provider.
 * Changing provider requires changing the high-level module.
 */
class StripePaymentService {
  charge(amount: number): void {
    console.log(`Charging ${amount} via Stripe...`);
  }
}

class OrderService {
  constructor(private stripePaymentService: StripePaymentService) {}

  checkout(amount: number): void {
    this.stripePaymentService.charge(amount);
  }
}

/**
 * Refactor using abstraction
 */
interface PaymentProcessor {
  process(amount: number): void;
}

class StripeProcessor implements PaymentProcessor {
  process(amount: number): void {
    console.log(`Processing ${amount} with Stripe.`);
  }
}

class PayPalProcessor implements PaymentProcessor {
  process(amount: number): void {
    console.log(`Processing ${amount} with PayPal.`);
  }
}

class OrderManager {
  constructor(private paymentProcessor: PaymentProcessor) {}

  checkout(amount: number): void {
    this.paymentProcessor.process(amount);
  }
}

const stripeOrder = new OrderManager(new StripeProcessor());
stripeOrder.checkout(150);

const paypalOrder = new OrderManager(new PayPalProcessor());
paypalOrder.checkout(250);

/**
 * Why this follows DIP:
 * - OrderManager depends on the PaymentProcessor interface, not a concrete provider.
 * - New payment methods can be added without changing the OrderManager class.
 */
