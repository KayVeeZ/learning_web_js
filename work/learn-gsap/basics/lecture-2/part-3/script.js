var tl = gsap.timeline();
gsap.from("#page1 #box",{
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360
});
gsap.from("#page2 #box",{
    scale: 0,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
});