// gsap.registerPlugin(ScrollTrigger);

// // Animate the image movement
// gsap.to(".img7", {
//     scrollTrigger: {
//         trigger: ".imgContainer", // The trigger element
//         start: "top top", // Start the animation on top
//         end: "bottom center", // End animation when the scroll reaches this point
//         scrub: 1, // Smooth scrolling
//         pin: true, // Pin the image during scroll
//         markers: false // Enable markers for debugging
//     },
//     top: "50%", // Move vertically to the center
//     left: "50%", // Move horizontally to the center
//     scale: 0.5, // Scale down as it moves
//     ease: "power1.inOut" // Smooth transition
// });

// // Move the image into the box and make it stay there
// gsap.to(".img7", {
//     scrollTrigger: {
//         trigger: ".secondContainer",
//         start: "top center",
//         scrub: 1,
//         onEnter: function() {
//             const img = document.querySelector('.img7');
//             const box = document.querySelector('.box');
//             // Move the image to the box
//             box.appendChild(img);
//             img.style.position = 'absolute';
//             img.style.top = '50%';
//             img.style.left = '50%';
//             img.style.transform = 'translate(-50%, -50%)';
//             img.style.width = '100%'; // Adjust size as needed
//             img.style.height = 'auto';
//         }
//     },
//     scale: 1, // Scale back to normal to fit inside the box
//     ease: "power2.out"
// });


console.clear();
gsap.registerPlugin(Flip, ScrollTrigger);

let flipCtx;
const hero = document.querySelector(".hero");
const flipElement = document.querySelector(".flip-element");
const flipTarget = document.querySelector(".flip-target");
const rightColumn = document.querySelector(".right-column");

const createTween = () => {
  flipCtx && flipCtx.revert();

  hero.appendChild(flipElement);

  flipCtx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero", 
        start: "top top", 
        end: "+=100px", 
        pin: true, 
        scrub: true, 
      }
    });

    const state = Flip.getState(flipElement);

    flipTarget.appendChild(flipElement);

    flipElement.style.position = "absolute";
    flipElement.style.top = "60%";
    flipElement.style.left = "60%"; 
    flipElement.style.width = "100%"; 
    flipElement.style.height = "100%"; 

    const flip = Flip.from(state, {
      ease: "none", 
      onComplete: () => {
        flipElement.style.position = "absolute";
        flipElement.style.top = "60%"; 
        flipElement.style.left = "10%"; 
        flipElement.style.width = "100%"; 
        flipElement.style.height = "100%"; 
        flipElement.style.borderRadius = "50%";
      }
    });

    tl.add(flip);

    ScrollTrigger.create({
      trigger: flipTarget,
      start: () => tl.scrollTrigger.end, 
      end: "bottom bottom", 
      endTrigger: ".right-column", 
      pin: true, 
      pinType: "transform",
      pinSpacing: false, 
    });
  });
};

createTween();

window.addEventListener("resize", createTween);


