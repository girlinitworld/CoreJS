//4. Use decorators to implement logging functionality for a class, where all method invocations are logged with their arguments and return values.
function logMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);

    console.log(`Method '${methodName}' called with arguments: ${JSON.stringify(args)}`);
    console.log(`Method '${methodName}' returned: ${JSON.stringify(result)}`);

    return result;
  };

  return descriptor;
}

class ExampleClass {
  @logMethod
  calculateSum(a: number, b: number): number {
    return a + b;
  }

  @logMethod
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}

const example = new ExampleClass();

example.calculateSum(5, 10);
example.greet("John");
