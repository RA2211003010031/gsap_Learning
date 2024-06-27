var tl = gsap.timeline();

tl.from("#nav h1, #nav h3", {
    y:-100,
    duration:0.3,
    opacity:0,
    stagger:0.3
})

tl.from("#nav h2",{
    scale:2.5,
    duration:0.2,
    opacity:0
})

tl.from("#left h1", {
    x:-200,
    duration:0.3,
    opacity:0,
    stagger:1
})

tl.from("#img_page1", {
    scale:0.5,
    duration:0.5,
    opacity:0,
})

tl.from("#page2 .box",{
    opacity:0,
    scale:0.5,
    stagger:0.3,
    x:-200,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        scrub:1,
        // markers:true,
        start:"top 80%",
        end:"top 42%"
    },
})