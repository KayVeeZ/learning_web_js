var tl = gsap.timeline();
var full = document.querySelector("#full");
var menuButton = document.querySelector("#nav i");
var closeButton = document.querySelector("#full i");

tl.to(full, {
    right: 0,
    duration: 0.5,
    delay: 0.05
});
tl.from("#full h4", {
    x:150,
    duration:0.6,
    stagger: 0.2,
    opacity: 0
});
tl.from(closeButton, {
    opacity: 0
});

tl.pause();

menuButton.addEventListener("click",function () {
    tl.play();
})

closeButton.addEventListener("click",function () {
    // tl.to(full, {
    //     right: "-40%",
    //     duration: 1,
    //     delay: 0.05
    // });
    tl.reverse();
})

