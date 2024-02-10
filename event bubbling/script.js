document.querySelector(".container").addEventListener("click", (e) => {
    alert("container was clicked");
});

document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation();
    alert("childContainer was clicked");
});

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation();
    alert("child was clicked");
});


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


// you can change timeout to interval to change colors non-stop, these functions do not nest
setTimeout(() => {
   document.querySelector(".childContainer").style.backgroundColor = getRandomColor(); 
}, 1000);