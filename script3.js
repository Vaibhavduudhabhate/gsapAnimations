window.onload = function() {
    gsap.from(".impossible", {
        duration: 1,
        delay: 1.3,
        scale: 0,
        ease: "power1.inOut"
    });
    const positions = [
        { top: "10%", left: "10%" },//
        { top: "20%", left: "75%" },//
        { top: "70%", left: "10%" },//
        { top: "2%", left: "2%" },//
        { top: "20%", left: "80%" },//
        { top: "80%", left: "80%" },
        { top: "50%", left: "80%" }
    ];

    gsap.to(".imgCom:not(.img1)", {
        duration: 1.5,
        delay: 4,
        stagger: 0.2,
        opacity: 1,
        ease: "power1.in",
        onStart: function() {
            positions.forEach((pos, index) => {
                gsap.to(`.img${index + 2}`, {
                    top: pos.top,
                    left: pos.left,
                    duration: 1.5,
                    ease: "power1.in"
                });
            });
        }
    });
};

gsap.from('.img1',{
    duration: 0.5 ,
    delay: 2.5,
    opacity: 0,
})
gsap.from('.img2',{
    duration: 0.5 ,
    delay: 2.7,
    opacity: 0,
})
gsap.from('.img3',{
    duration: 0.5 ,
    delay: 3,
    opacity: 0,
})
gsap.from('.img4',{
    duration: 0.5 ,
    delay: 3.2,
    opacity: 0,
})
gsap.from('.img5',{
    duration: 0.5 ,
    delay: 3.5,
    opacity: 0,
})
gsap.from('.img6',{
    duration: 0.5 ,
    delay: 3.8,
    opacity: 0,
       
})
gsap.from('.img7',{
    duration: 0.5 ,
    delay: 4,
    opacity: 0,
})

gsap.from([".creating",".toignore"], {
    x :-40,
    duration: 1 ,
    delay: 0,
    opacity: 0,
    onComplete:function () {
        gsap.to([".creating",".brands"],{
            y:-100,
            delay:0.5,
            duration:1,
        });
        gsap.set(".impossible", {
            display:'block',
         });
    },
       
})
gsap.from([".brands"], {
    x :40,
    duration: 1 ,
    delay: 0,
    opacity: 0,
       
})

