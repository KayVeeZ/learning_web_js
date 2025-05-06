function scrollDown() {
    gsap.to(".marquee", {
        transform: 'translateX(-200%)',
        duration: 4,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".marquee img", {
        rotate: 180
    });
}

function scrollUp() {
    gsap.to(".marquee", {
        transform: 'translateX(0%)',
        duration: 4,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".marquee img", {
        rotate: 0
    });
}


/*  This is using wheel */
// window.addEventListener("wheel", function (dets) {
//     if (dets.deltaY > 0) {
//         console.log("Scroll down");
//         console.log(window.self.Location());
//     }
//     else if (dets.deltaY < 0) {
//         console.log("Scroll up");
//         console.log(window.self.location);
//     }
// });

/*  This is using scroll */
let lastScrolltop = window.scrollY;

window.addEventListener("scroll", function () {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrolltop) {
        console.log("Scroll down");
        scrollDown();
    }
    else if(currentScrollTop < lastScrolltop) {
        console.log("Scrolled up");
        scrollUp();
    }

    lastScrolltop = currentScrollTop <=0 ? 0: currentScrollTop;
});


