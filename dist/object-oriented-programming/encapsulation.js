"use strict";
console.log('Encapsulation in TypeScript');
/**
 * Encapsulation means protect the internal state of the class.
 *
 */
class Account {
    constructor(initialBalance) {
        this.balance = 0;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log('Deposit amount must be positive.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log('Invalid withdrawal amount.');
        }
    }
    getBalance() {
        return this.balance;
    }
}
const userAccount1 = new Account(100);
userAccount1.deposit(50);
console.log(userAccount1.getBalance()); // Output: 150
