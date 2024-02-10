console.log("Hello world!");

document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children
document.body.firstElementChild.children[3].nextElementSibling

// let boxes = document.getElementsByClassName('box');
// console.log(boxes);
// boxes[2].style.backgroundColor="red";

document.getElementById("red").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "green";
boxesQuery = document.querySelectorAll(".box");
e = document.querySelectorAll(".div");
// for (const iterator of boxesQuery){
//     iterator.style.backgroundColor="blue";
// }
boxesQuery.forEach(element => {
    element.style.color="white";
    element.style.backgroundColor="purple";
});

if (boxesQuery[3].matches("redbox")){
    alert("true")
}
else{
    alert("???")
}

if (boxesQuery[3].matches("closest")){
    alert("0")
}
else{
    alert("1")
}
if (document.querySelector(".container").contains(e[0])){
    alert("22")
}
else{
    alert("11")
}
console.log(e[0]);