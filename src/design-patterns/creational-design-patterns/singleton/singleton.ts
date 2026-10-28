
import { DatabaseConnection } from "./db/database-connection";

class User {
  getUsers() {
    return DatabaseConnection.getInstance().getUsers();
  }
}

class Product {
   getProducts() {
    return DatabaseConnection.getInstance().getProducts();
  }
}

console.log("Users:", new User().getUsers());
console.log("Products:", new Product().getProducts());
