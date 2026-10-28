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
  print (): void {
    console.log('Printing document...');
  }
  scan (): void {
    console.log('Scanning document...');
  }
  fax (): void {
    console.log('Sending fax...');
  }
}

class OldPrinter extends Machine {
  print (): void {
    console.log('Printing document...');
  }
  // old printer cannot scan or fax, but it is forced to implement these methods
}

/**
 * Modify the design to follow ISP
 */

interface Printer {
  print: () => void;
}

interface Scanner {
  scan: () => void;
}

interface Fax {
  fax: () => void;
}

class PrinterMachine implements Printer {
  print (): void {
    console.log('Printing document...');
  }
}

class ScannerMachine implements Scanner {
  scan (): void {
    console.log('Scanning document...');
  }
}

class FaxMachine implements Fax {
  fax (): void {
    console.log('Sending fax...');
  }
}