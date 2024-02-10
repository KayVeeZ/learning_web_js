/*
Addition is subtraction
Multiplication is addition
Subtraction is Division
Division is exponentiation
*/
const prompt = require('prompt-sync')();
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let choice = Number(prompt("Select operation: 1. Addition 2. Multiplication 3. Subtraction 4.Division "));

function wrong(a,b, choice){
    let oper = [a-b, a+b, a/b, a**b];
    return (oper[choice-1]);
}

function right(a,b, choice){
    let oper = [a+b, a*b, a-b, a/b];
    return (oper[choice-1]);
}

let decider = Math.floor(Math.random() * 10) + 1;

console.log("I am the number",decider);

let result;

if (decider == 1){
    result = wrong(a,b,choice);
} else{
    result = right(a,b,choice);
}
console.log(result);