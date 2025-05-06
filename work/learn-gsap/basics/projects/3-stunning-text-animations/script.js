var tl = gsap.timeline();

function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = document.querySelector("h1").textContent;

    var splitText = h1Text.split("");

    var halfValue = Math.floor(splitText.length/2);

    var clutter = "";

    splitText.forEach(function (e,idx) {
        if (idx < halfValue) {
            clutter += `<span class='a'>${e}</span>`;
        }
        else {
            clutter += `<span class='b'>${e}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
    y:70,
    duration:0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})
gsap.from("h1 .b", {
    y:70,
    duration:0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
})
