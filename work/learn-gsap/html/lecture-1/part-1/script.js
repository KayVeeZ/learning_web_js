gsap.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"yellow",
    borderRadius:"50%",
    scale: 0.5,
    repeat: -1,
    yoyo: true
})
gsap.from("#box2",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale: 1,
    repeat: -1,
    yoyo: true
})

gsap.from("h1",{
    color: "red",
    duration: 1,
    delay: 1,
    opacity: 0,
    y: 20,
    stagger: 0.3,
    repeat: -1,
    yoyo: true
})