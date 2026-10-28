"use strict";
/**
 * S stands for single responsibility principle,
 *  which states that a class should have only one reason to change.
 */
/**
 * Don't DO THIS
 */
class Invoice {
    constructor(amount) {
        this.amount = amount;
    }
    print() {
        console.log(`Invoice amount: ${this.amount}`);
    }
    saveToDatabase() {
        console.log(`Saving invoice with amount ${this.amount} to database...`);
    }
    sendEmail() {
        console.log(`Sending invoice with amount ${this.amount} via email...`);
    }
}
/**Refactor with SRP */
class InvoicePrinter {
    print(invoice) {
        console.log(`Invoice amount: ${invoice.amount}`);
    }
}
class InvoiceDatabase {
    save(invoice) {
        console.log(`Saving invoice with amount ${invoice.amount} to database...`);
    }
}
class InvoiceEmailer {
    send(invoice) {
        console.log(`Sending invoice with amount ${invoice.amount} via email...`);
    }
}
