let x = 10;
let y  ="asd";
var abc;
alert(typeof x+" "+typeof y+" "+typeof abc);
let o = {
    name:"aaa"
}
alert(typeof x+" "+typeof y+" "+typeof abc+" "+o);
console.log(o);
o.salary="$100,000,000"
console.log(o);
o.salary="$500,000,000"
console.log(o);


let a = 10;
let b = 12;
let c = a > b ? a-b : a+b;
alert(c);

onclick(f1.b1)
{
    
    if(f1.userId.value=="kshitij" && f1.password.value=="pass"){
        alert("Logged in!");
        window.open("C:/songtest/song.mp3");
    }
    else{
        alert("Wrong Credentials.");
    }
}