const prompt = require('prompt-sync')();

a = prompt("Enter the number for factorial: ");
function factorial(n){
    if (n == (1 || 0)){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
    }

console.log(factorial(a));
