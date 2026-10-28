"use strict";
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
    charge(amount) {
        console.log(`Charging ${amount} via Stripe...`);
    }
}
class OrderService {
    constructor(stripePaymentService) {
        this.stripePaymentService = stripePaymentService;
    }
    checkout(amount) {
        this.stripePaymentService.charge(amount);
    }
}
class StripeProcessor {
    process(amount) {
        console.log(`Processing ${amount} with Stripe.`);
    }
}
class PayPalProcessor {
    process(amount) {
        console.log(`Processing ${amount} with PayPal.`);
    }
}
class OrderManager {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    checkout(amount) {
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
