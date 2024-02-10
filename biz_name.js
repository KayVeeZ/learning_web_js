/*
Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

another word:
Bros
Limited
Hub

use strings, not arrays
use functions


*/
function getRndInteger(max, min=1) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function adjective(){
   let number_1 = getRndInteger(4);
   let ad_1 = "Crazy";
   let ad_2 = "Amazing";
   let ad_3 = "Fire";
   return `${eval('ad_' + number_1)}`;

}
function shop_name(){
   let number_1 = getRndInteger(4);
   let sn_1 = "Engine";
   let sn_2 = "Foods";
   let sn_3 = "Garments";
   return `${eval('sn_' + number_1)}`;
}
function last_word(){
    let number_1 = getRndInteger(4);
    let lw_1 = "Bros";
    let lw_2 = "Limited";
    let lw_3 = "Hub";
    return `${eval('lw_' + number_1)}`;
 }
 

function name_1(){
    let a = adjective();
    let b = shop_name();
    let c = last_word();
    return `${a} ${b} ${c}`;
}

let generated = name_1();
console.log("This is the generated business name:",generated);
