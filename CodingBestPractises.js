// Efficiency
// Inefficient Example
function sumArrayInefficient(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// Efficient example
function sumArrayEfficient(array) {
  return array.reduce((a, b) => a + b, 0);
}
// Format and Syntax
// bad indentation and spacing
const addTwoNumbersBadIndentation=(number1,number2)=>{
const result=number1+number2;
return result;
}

// good indentation and spacing
const addTwoNumbersGoodIndentation = (number1, number2) => {
    const result = number1 + number2
    return result
}

// Arrow function no colons, no return
const multiplyByTwo = number => number * 2

// Function, colons, return
function multiplyByThree(number) {
    return number * 3;
}

// naming 
// Poor Naming
function ab(a, b) {
  let x = 10;
  let y = a + b + x;
  console.log(y);
}

ab(5, 3);
// Good Naming
function calculateSumWithOffset(num1, num2) {
  let offset = 10;
  let sum = num1 + num2 + offset;
  console.log(sum);
}
// Concise function

// Using arrow function for conciseness
const squareArrow = number => number * number;

//Concise function
const countVowels = s => (s.match(/[aeiou]/gi) || []).length;
console.log(countVowels("hello world"))
// More verbose and clearer function
function countVowels(s) {
  const vowelRegex = /[aeiou]/gi;
  const matches = s.match(vowelRegex) || [];
  return matches.length;
}

console.log(countVowels("hello world"));

// reusability
// No re-usability
function calculateCircleArea(radius) {
  const PI = 3.14;
  return PI * radius * radius;
}

function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

const circleArea = calculateCircleArea(5);
const rectangleArea = calculateRectangleArea(4, 6);
const triangleArea = calculateTriangleArea(3, 7);

console.log(circleArea, rectangleArea, triangleArea);

// Re-usability with a generic function
function calculateArea(shape, ...dimensions) {
  switch (shape) {
    case 'circle':
      const [radius] = dimensions;
      const PI = 3.14;
      return PI * radius * radius;
    case 'rectangle':
      const [length, width] = dimensions;
      return length * width;
    case 'triangle':
        const [base, height] = dimensions;
        return (base * height) / 2;
  }
}
const circleAreaReusable = calculateArea('circle', 5);
const rectangleAreaReusable = calculateArea('rectangle', 4, 6);
const triangleAreaReusable = calculateArea('triangle', 3, 7); 


// Single Source of Truth
// Option 1: No "single source of truth"

// file 1: weatherAPI.js
const apiKey1 = '12345abcde';

function getCurrentWeather(city) {
  return fetch(`https://openweather.com/v1/${city}?apiKey=${apiKey}`)
    .then(response => response.json());
}

// file 2: weatherComponent.js
const apiKey2 = '12345abcde';

function displayCurrentWeather(city) {
  getCurrentWeather(city)
    .then(weatherData => {
      // display weatherData on the UI
    });
}
// Option 2: "Single source of truth"

// file 1: weatherAPI.js
const apiKey = '12345abcde';

function getCurrentWeatherSST(city) {
  return fetch(`https://openweather.com/v1/${city}?apiKey=${apiKey}`)
    .then(response => response.json());
}

export { getCurrentWeatherSST, apiKey };


// file 2: weatherComponent.js
import { getCurrentWeather } from './weatherAPI';

function displayCurrentWeather(city) {
  getCurrentWeather(city)
    .then(weatherData => {
      // display weatherData on the UI
    });
}

//Modularization
// Poor Modularization: All code in a single file/function
function calculateSalaryTaxReport(employee) {
    const salary = employee.hoursWorked * employee.hourlyRate;
    const tax = salary / 100 * employee.taxRate
    const report = `Employee: ${employee.name}, Salary: ${salary}, Tax: ${tax}`;
    return report;
}

// Better Modularization
export function calculateSalaryModular(employee) {
  return employee.hoursWorked * employee.hourlyRate;
}
export function calculateTaxModular(employee, salary) {
    return salary / 100 * employee.taxRate
}
export function generateReportModular(employee, salary, tax) {
  return `Employee: ${employee.name}, Salary: ${salary}, Tax: ${tax}`;
}
