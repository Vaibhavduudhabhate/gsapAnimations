
gsap.from(".videowrapper", {
    x:-180,
    duration: 1,
    delay: 1.5,
    opacity: 1,
    ease: "power1.in", // ease-in effect
    onStart: function() {
        gsap.set('.videowrapper', {display: 'block'});
    }
});

gsap.from('.transformtext',{
    y: 20,
    duration: 0.5 ,
    delay: 1,
    opacity: 0,
       
})
gsap.from('.lets2',{
    y: 20,
    duration: 0.5 ,
    delay: 1,
    opacity: 0,
    onComplete:function () {
        gsap.set('.lets2',{display:'none'});
    },
})

gsap.from('.yourbrandtext',{
    y: 20,
    duration: 1 ,
    delay: 1,
    opacity: 0,
})