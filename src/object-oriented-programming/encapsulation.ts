

console.log('Encapsulation in TypeScript');

/**
 * Encapsulation means protect the internal state of the class.
 * you can achieve encapsulation in TypeScript by using access modifiers like private, protected, and public.
 * you can only access the private members of a class through public methods (getters and setters) that you define.
 */

class Account {

  private balance : number = 0;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Invalid withdrawal amount.');
    } 
  }

  public getBalance(): number {
    return this.balance;
  }
}

const userAccount1 = new Account(100);
userAccount1.deposit(50);
console.log(userAccount1.getBalance()); // Output: 150