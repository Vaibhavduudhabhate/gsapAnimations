
gsap.from("#Animated", {  
    y: 30,
    duration: 1.5,
    delay:3,
    opacity:0,
    onComplete:function () {
        gsap.set('.textdiv1', {display: 'none'});
        gsap.set('.textdiv2',{display:'block'});
    }
 });
gsap.from('#Animatedtwo',{
    y: 30,
    duration: 2 ,
    delay: 6,
    opacity: 0,
    onComplete:function () {
        gsap.set('.textdiv2', {display: 'none'});
        gsap.set('.textdiv3',{display:'block'});
    }
})
gsap.to('#zeroClass',{
    y: 30,
    duration: 1,
    delay: 2,
    opacity: 0,
    onComplete: function() {
        gsap.set('.zeroClass', {display: 'none'});
    }
})