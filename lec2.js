let tl = gsap.timeline();

tl.from("#nav img,#nav #nav2 h3,#nav3 h4,#nav3 button", {
    y: -80,
    duration: 1,
    // delay:1,
    opacity: 0,
    stagger: .1
})

tl.from("#main h1", {
    y:200,
    duration: 1,
    delay: .5,
    opacity:0,
    stagger:.1
})
// tl.from("#nav #nav2 h3",{
//     y:-80,
//     duration:1,
//     delay:.5,
//     opacity:0
// })
// tl.from("#nav3 h4,#nav3 button",{
//     y:-80,
//     duration:1,
//     delay:.5,
//     opacity:0
// })
tl.from("#left-img", {
    scale:0,
    x: -200,
    duration: 1,
    // delay:.5,
    opacity: 0
})
tl.from("#right-img", {
    scale:0,
    x: 600,
    duration: 1,
    // delay:.5,
    opacity: 0
})
tl.from("#Scroll-down",{
    scale:0,
    opacity:0
})
tl.to("#Scroll-down",{
    y:40,
    repeat:-1,
    yoyo:true
})