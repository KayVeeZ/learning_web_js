// standard for loop
// for (let i =0;i<10; i++){
//     console.log(i);
// }

// for in loop example
// iterates through keys of object
// let o = {
//     name : "Kshitij",
//     salary : "$5,000,000,000",
//     role : "Developer"
// }
// for (const key in o){
//     console.log(key);
// }

// for of loop example
// iterates through values of object
// // for (const iterator of "Kshitij"){
// //     console.log(iterator);
// }

// for each example?


// while loop example
// let i = 0;
// while (i<10){
//     console.log(i);
//     i++;
// }

// do while loop example
// let i =0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

const func1 =(x)=>{
    console.log("I am an arrow function",x);
}
function sum(a,b){
    return a+b;
}
console.log(sum(200,34));
func1(34);