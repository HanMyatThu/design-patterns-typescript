
/**
 * S stands for single responsibility principle,
 *  which states that a class should have only one reason to change.
 */

/**
 * Don't DO THIS
 */
class Invoice {
  constructor(public amount: number) {}

  print() : void {
    console.log(`Invoice amount: ${this.amount}`);
  }

  saveToDatabase() : void {
    console.log(`Saving invoice with amount ${this.amount} to database...`);
  }

  sendEmail() : void {
    console.log(`Sending invoice with amount ${this.amount} via email...`);
  }
}

/**Refactor with SRP */
class InvoicePrinter {
  print(invoice: Invoice) : void {
    console.log(`Invoice amount: ${invoice.amount}`);
  }
}

class InvoiceDatabase {
  save(invoice: Invoice) : void {
    console.log(`Saving invoice with amount ${invoice.amount} to database...`);
  }
}

class InvoiceEmailer {
  send(invoice: Invoice) : void {
    console.log(`Sending invoice with amount ${invoice.amount} via email...`);
  }
}