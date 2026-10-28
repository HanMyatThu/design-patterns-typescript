export interface User {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
}

export class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private connected = false;

  // make constructor private
  private constructor() {}

  // create and expose a static method to get the instance of the class
  static getInstance(): DatabaseConnection {
    if (DatabaseConnection.instance === null) {
      DatabaseConnection.instance = new DatabaseConnection();
    }

    return DatabaseConnection.instance;
  }

  connect(): void {
    if (this.connected) {
      return;
    }

    this.connected = true;
    console.log("Database connection established.");
  }

  getUsers(): User[] {
    this.connect();
    console.log("Fetching users from the database...");

    return [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
  }

  getProducts(): Product[] {
    this.connect();
    console.log("Fetching products from the database...");

    return [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Keyboard" },
    ];
  }
}