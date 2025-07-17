// gsap.to("h1",{
//     x:600,
//     duration:2,
//     delay:.5,
//     stagger:1,
//     repeat:-1,
//     yoyo:true
// })

let tl = gsap.timeline();

tl.to("h1",{
    x:300,
    duration:2
})
tl.to("h2",{
    x:400,
    duration:2
})
tl.to("h3",{
    x:500,
    duration:2
})
