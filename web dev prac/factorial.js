let num = Number(prompt("Enter the number for factorial: "));

const red = (a1,b1)=>{
    return a1*b1;
}

function factorial(number){
    let arr = Array.from(Array(number+1).keys());
    return (arr.slice(1,)).reduce(red);
}
let c = factorial(num);
alert("This is c: "+c);
// let c = [];
// for (let i = 1; i <= num; i++){
//     c.push(i);
// }

// console.log(c.reduce(red));




// let b=1;
// for (let i = num; i > 0; i--){
//     b *= i;
//     console.log(b);
// }
// console.log("This is the factorial calculation",b);