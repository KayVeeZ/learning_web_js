let a = [1,11,23,17,5];


// let b = [];
// for (let i = 0; i < a.length;i++){
//     b.push(a[i]**2);
// }


let b = a.map((e,index,array)=>{
    return e**2;
})
console.log(b);

const greaterThanSeven=(e)=>{
    if (e>7){
        return true;
    }
    return false;
}
console.log(a.filter(greaterThanSeven));
console.log(b.filter(greaterThanSeven));

let c = [1,2,3,4,5,6];

const red = (a1,b1)=>{
    return a1*b1;
}

console.log(c.reduce(red));