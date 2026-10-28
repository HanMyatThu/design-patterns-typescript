"use strict";
/**
 * Interface Segregation Principle (ISP) states that
 * no client should be forced to depend on methods it does not use.
 * In other words, an interface should have only the methods that are relevant to the implementing class.
 * This principle helps to keep interfaces small and focused, making them easier to implement and maintain.
 */
/**
 * Don't do this, violate ISP
 */
class Machine {
    print() {
        console.log('Printing document...');
    }
    scan() {
        console.log('Scanning document...');
    }
    fax() {
        console.log('Sending fax...');
    }
}
class OldPrinter extends Machine {
    print() {
        console.log('Printing document...');
    }
}
class PrinterMachine {
    print() {
        console.log('Printing document...');
    }
}
class ScannerMachine {
    scan() {
        console.log('Scanning document...');
    }
}
class FaxMachine {
    fax() {
        console.log('Sending fax...');
    }
}
