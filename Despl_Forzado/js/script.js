gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

let pinTitle1 = document.getElementById("pinBarrio1");
let pinTitle2 = document.getElementById("pinBarrio2");


gsap.to(pinTitle1, {
  x: () => -(pinTitle1.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "power2.out",
  scrollTrigger: {
    start: "top top",
    trigger: ".intro",
    invalidateOnRefresh: true,
    pin: ".intro",
    scrub: 2,
    anticipatePin: 1,
    end: () => "+=" + pinTitle1.offsetWidth
  }
})

gsap.to(pinTitle2, {
  x: () => -(pinTitle2.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "power2.out",
  scrollTrigger: {
    start: "top top",
    trigger: ".intro",
    invalidateOnRefresh: true,
    pin: ".intro",
    scrub: 2,
    anticipatePin: 1,
    end: () => "+=" + pinTitle2.offsetWidth
  }
})