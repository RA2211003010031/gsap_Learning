gsap.from("#page1 #box", {
    opacity:0,
    scale:0,
    rotate:360,
    delay:0.5,
    duration:1,
})

gsap.from("#page2 #box", {
    opacity:0,
    scale:0,
    rotate:360,
    delay:0.5,
    duration:1,
    scrollTrigger : {
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:1
    }
})

