document.querySelector(".container").hidden = true;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function decider() {
  let a1 = 0;
  while(a1 === 0){
    a1 = Math.floor(Math.random() * 5);
    
  }
  return a1;
}

// Function to get a random key code
function getRandomKeyCode() {
  // Define the range of key codes for keys you want to consider
  const minKeyCode = 65; // Key code for 'A'
  const maxKeyCode = 90; // Key code for 'Z'
  
  // Generate a random key code within the defined range
  return Math.floor(Math.random() * (maxKeyCode - minKeyCode + 1)) + minKeyCode;
}

// let decider1 = Math.floor(Math.random() * 5);
// let decider2 = Math.floor(Math.random() * 5);

selectorBox = document.querySelectorAll(".box");
setInterval(()=>{
  console.log(decider());
  let color1 = decider();
  // let color2 = decider();
selectorBox[color1].style.backgroundColor = getRandomColor();
selectorBox[color1].style.color = getRandomColor();
for (let i = 1; i< 5;i++){
  if (i!= color1 ) {
    selectorBox[i].style.backgroundColor = 'white';
    selectorBox[i].style.color = 'black';
  }
}
},1000)

console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".container").hidden);
// document.querySelector(".container").hidden = true;

document.querySelector(".box").innerHTML = "1st Box";
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
document.querySelector(".box").setAttribute("style", "color: red;")
console.log(document.querySelector(".box").attributes);
document.querySelector(".box").removeAttribute("style");
document.querySelector(".box").setAttribute("data-createdby","Kshitij");
document.querySelector(".box").setAttribute("data-conceptby","KayVeeZ");
console.log(document.querySelector(".box").dataset);

let div = document.createElement("div");
div.innerHTML="inserted element by <b>KayVeeZ</b>";
div.setAttribute("class","created");
document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
let cont =  document.querySelector(".container");

cont.insertAdjacentHTML("beforeend", "<b>Hahaha</b>"); // adjacent html, text,element
document.querySelector(".container").classList.add("kshitij")
console.log("Classlist of container",document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);
document.querySelector(".container").classList.remove("kshitij")
console.log(document.querySelector(".container").classList);

let clickCount = 0;
let button = document.getElementById("btn")

function switch1() {
  if (clickCount === 0) {
    document.querySelector(".box").classList.add("switch");
    clickCount++;
  }
  else {
    document.querySelector(".box").classList.toggle("switch");
  }
 }

button.addEventListener("click", ()=>{
  switch1();
})

// this part of the script is for the game

// Generate a random key code
const winKeyCode = getRandomKeyCode();

// convert it to the output
const winKey = String.fromCharCode(winKeyCode);

// Boolean variable to track if the game has been won
let gameWon = false;

// initialise the number of lives
let lives = 10;

console.log("This is the winning key: "+winKey);

document.addEventListener("keydown",(e)=>{
  console.log(typeof e.key);
  if (gameWon) {
    return; // Exit the function if the game is already won
  }
  
  if (lives >= 20-1){
    document.getElementById("game").innerHTML="<p><p>You <b>win!</b></p><br></p>";
    // Set gameWon to true to indicate the game has been won
    gameWon = true;
    return;
  }
  if (lives <= 1){
    document.getElementById("game").innerHTML="<p><p>You <b>lose!</b></p><br></p>";
    // Stop further processing of key events if the player loses
    document.removeEventListener("keydown");
    return;
  }
  else if (e.key !== winKey && lives < 20){
    lives-= 1;
    // alert("Life down by 1");
    document.getElementById("lives").innerHTML = "Lives: "+lives;
  }
  else if (e.key === winKey && lives < 20){
    lives+= 1;
    // alert("Life up by 1");
    document.getElementById("lives").innerHTML = "Lives: "+lives;
  }
});

document.getElementById("lives").innerHTML = "Lives: "+lives;


// document.addEventListener(lives,()=>{
  
// })