/*
Addition is subtraction
Multiplication is addition
Subtraction is Division
Division is exponentiation
*/

let a = prompt("Enter first number: ");
let choice = prompt("Enter operation");
let b = prompt("Enter second number: ");

let decider = Math.random();


let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

alert("The decider is "+decider);
if (decider > 0.1){
    alert(`The result is ${eval(`${a} ${choice} ${b}`)}`);
} else{
    choice = obj(choice)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}