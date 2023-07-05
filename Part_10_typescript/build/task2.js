"use strict";
class Product {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
const product = new Product(1, "Laptop", "Device with keyboard");
console.log(product.id);
console.log(product.name);
console.log(product.description);
