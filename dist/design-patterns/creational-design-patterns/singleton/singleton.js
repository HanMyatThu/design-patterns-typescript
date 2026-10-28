"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_connection_1 = require("./db/database-connection");
class User {
    getUsers() {
        return database_connection_1.DatabaseConnection.getInstance().getUsers();
    }
}
class Product {
    getProducts() {
        return database_connection_1.DatabaseConnection.getInstance().getProducts();
    }
}
console.log("Users:", new User().getUsers());
console.log("Products:", new Product().getProducts());
