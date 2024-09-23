gsap.registerPlugin(ScrollTrigger, Flip);

let flipCtx;
function anim() {
  flipCtx && flipCtx.revert();
  const p1 = document.querySelector(".p-1");
  const p2 = document.querySelector(".p-2");
  const bg = document.querySelector(".p-bg");
  p1.appendChild(bg);
  bg.style.cssText = "";
  
  flipCtx = gsap.context(() => {
    const state = Flip.getState(bg);
    p2.appendChild(bg);
    const flip = Flip.from(state, { absolute: true });

    ScrollTrigger.create({
      trigger: "body",
      start: 10,
      endTrigger: p2,
      end: "bottom 80%",
      scrub: true,
      animation: flip,
      onEnter: () => {
        p1.classList.remove("active");
      },
      onLeaveBack: () => {               
        p1.classList.add("active");
      },
      onLeave: () => {
        p2.classList.add("active"); 
      },
      onEnterBack: () => {
        p2.classList.remove("active");
      },
    });
  });
}

anim();

window.addEventListener("resize", anim);