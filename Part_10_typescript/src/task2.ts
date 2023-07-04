//2. Create a TypeScript interface representing a database entity with properties such as ID, name, and description. Implement the interface in a class.
interface DatabaseEntity {
  id: number;
  name: string;
  description: string;
}

class Product implements DatabaseEntity {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

const product = new Product(1, "Laptop", "Device with keyboard");

console.log(product.id);
console.log(product.name);
console.log(product.description);
