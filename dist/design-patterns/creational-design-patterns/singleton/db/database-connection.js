"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
class DatabaseConnection {
    constructor() {
        this.connected = false;
    }
    static getInstance() {
        if (DatabaseConnection.instance === null) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
    connect() {
        if (this.connected) {
            return;
        }
        this.connected = true;
        console.log("Database connection established.");
    }
    getUsers() {
        this.connect();
        console.log("Fetching users from the database...");
        return [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
        ];
    }
    getProducts() {
        this.connect();
        console.log("Fetching products from the database...");
        return [
            { id: 1, name: "Laptop" },
            { id: 2, name: "Keyboard" },
        ];
    }
}
exports.DatabaseConnection = DatabaseConnection;
DatabaseConnection.instance = null;
