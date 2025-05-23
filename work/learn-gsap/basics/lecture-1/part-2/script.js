// gsap.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1,
//     yoyo:true,
//     repeat:-1
// })
// gsap.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5,
//     yoyo:true,
//     repeat:-1
// })
// gsap.to("#box3",{
    // x:1500,
    // scale:0.5,
    // borderRadius:"50%",
    // duration:1.5,
    // delay:4,
    // yoyo:true,
    // repeat:-1
// })
var tl = gsap.timeline();
tl.to("#box1",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1,
    yoyo:true,
    repeat:-1
});
tl.to("#box2",{
    x:1500,
    backgroundColor:"yellow",
    duration:1.5,
    yoyo:true,
    repeat:-1
    });
tl.to("#box3",{
    x:1500,
    scale:0.5,
    borderRadius:"50%",
    duration:1.5,
    yoyo:true,
    repeat:-1
    });

