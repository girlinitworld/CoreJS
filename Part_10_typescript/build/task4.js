"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//4. Use decorators to implement logging functionality for a class, where all method invocations are logged with their arguments and return values.
function logMethod(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        console.log(`Method '${methodName}' called with arguments: ${JSON.stringify(args)}`);
        console.log(`Method '${methodName}' returned: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
class ExampleClass {
    calculateSum(a, b) {
        return a + b;
    }
    greet(name) {
        return `Hello, ${name}!`;
    }
}
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], ExampleClass.prototype, "calculateSum", null);
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ExampleClass.prototype, "greet", null);
const example = new ExampleClass();
console.log(example.calculateSum(5, 10));
console.log(example.greet("John"));
