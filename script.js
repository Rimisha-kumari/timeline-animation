var menu =document.querySelector("#nav i");
var close =document.querySelector("#full i");


var tl = gsap.timeline()
//code for timeline
tl.to("#full",{
    right:0,
    duration:0.8
})
tl.from("#full h4",{
    x:150,
    duration:0.5,
    stagger:0.2,
    opacity:0
})
tl.from("#full i",{
    opacity:0
})

tl.pause()
//its paused untill we are are not clicking it
menu.addEventListener("click",()=>{
    tl.play()//timeline gets played
})
close.addEventListener("click",()=>{
    tl.reverse()
})

