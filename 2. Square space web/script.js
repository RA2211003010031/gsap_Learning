var tl = gsap.timeline()

tl.from("#nav img, #nav_part2, #nav_part3", {
    y:-100,
    duration:0.8,
    delay:0.3,
    opacity:-2,
    stagger:0.4,
    scale:0
})

tl.from("#main h1", {
    y:100,
    opacity:0,
    stagger:0.2
})

tl.from("#main span", {
    scale:0,
    // delay:0.1,
    // duration:0.5,
    opacity:0,
    rotate:360
})

tl.from("#main>img", {
    scale:0,
    // duration:0.5,
    opacity:0,
    stagger:0.2
})

tl.from("#scroll", {
    y:50,
    opacity:0,
    repeat:-1,
    yoyo:true
})

