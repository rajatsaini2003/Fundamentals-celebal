
// KISS -> keep it simple, stupid

//non simple function
function checkNumberWithinRange(number) {
    const upperLimit = 10;
    const lowerLimit = -10;
    let isWithinRange = false;
    if(number > lowerLimit){
        if(number < upperLimit){
            isWithinRange = true;
        }
    }
    return isWithinRange ? "INSIDE THE GIVEN RANGE" : "OUTSIDE THE GIVEN RANGE";
}

//simple function
function checkNumberWithinRangeSimpleVersion(number){
    const upperLimit = 10;
    const lowerLimit = -10;
    return (number > lowerLimit && number < upperLimit) ? "INSIDE THE GIVEN RANGE" : "OUTSIDE THE GIVEN RANGE";
}


// DRY -> don't repeat yourself

//non DRY code Example  
function calculateTaxOnBooks(price, taxRate) {
    const tax = price / 100 * taxRate;
    return price + tax;
}
function calculateTaxOnElectronics(price, taxRate) {
    const tax = price / 100 * taxRate;
    return price + tax;
}
function calculateTaxOnClothing(price, taxRate) {
    const tax = price / 100 * taxRate;
    return price + tax;
}

//DRY code Example
function calculateTax(price, taxRate) {
    const tax = price / 100 * taxRate;
    return price + tax;
}

// SOLID ->
// S = Single responsibility principle
// s: A module, class, or function should have only one reason to change. 

//violation of srp
function calculateSalaryAndTax(employee) {
  const salary = employee.hoursWorked * employee.hourlyRate;
  const tax = salary / 100 * employee.taxRate
  return {salary, tax}
}

//following srp
function calculateSalary(employee) {
  return employee.hoursWorked * employee.hourlyRate;
}

function calculateTax(employee, salary) {
  return salary / 100 * employee.taxRate
}

// O = Open-closed principle
// O: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification

// Violation of OCP: Adding a new shape requires modifying the ShapeCalculator.
class ShapeCalculator {
  calculateArea(shape) {
    if (shape.type === 'circle') {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === 'square') {
      return shape.side * shape.side;
    }
    // Adding a new shape like 'triangle' would require modifying this method.
  }
}

// Following the OCP: Use polymorphism to extend functionality without modifying existing code.
class Shape {
  area() {
    throw new Error('Area method must be implemented by subclasses');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

let objectCircle = new Circle(10);
console.log(objectCircle.area());

let objectSquare = new Square(5);
console.log(objectSquare)

// L = Liskov Substituiton principle
// L : Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program

// code in LSP.js

// I = Interface Segregation principle
// I : Software should be divided into several independent parts.

// code in ISP.ts



// D = Dependency Inversion principle
// D : High-level modules should not depend on low-level modules. Both should depend on abstractions. 
//     Abstractions should not depend on details. Details should depend on abstractions.
// Violation of DIP: High-level module depends on low-level module.
//low-level module
class FastAPIService {
  code() {
    console.log("Code in FastAPI");
  }
}
//high-level module
class BackendService {
  constructor() {
    this.database = new FastAPIService(); // Direct dependency on low-level module
  }
    getService() {
    this.database.code();
    console.log("Fetching service...");
  }
}
// Following DIP: Both high-level and low-level modules depend on abstractions.
// Abstraction
class APIService {
  code() { 
    throw new Error("Method 'code()' must be implemented.");
  }
}
//low-level module
class FastAPIServiceDIP extends APIService {
  code() {
    console.log("Code in FastAPI");
  }
}
class ExpressJsServiceDIP extends APIService {
  code() {
    console.log("Code in ExpressJs");
  }
}
//high-level module
class BackendServiceDIP {
  constructor(apiService) {
    this.apiService = apiService; // Depend on abstraction
  }
  getService() {
    this.apiService.code();
    console.log("Fetching service...");
  }
}
let apiService = new FastAPIServiceDIP();
let backendService = new BackendServiceDIP(apiService);
backendService.getService();