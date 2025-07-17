gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360
})
gsap.from("#page2 #box",{
    scale:0,
    // delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroll:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:5
    }
})
gsap.from("#page3 #box",{
    scale:0,
    // delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroll:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:5 
    }
})