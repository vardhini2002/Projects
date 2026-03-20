gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

// Flower → Bud
tl.to("#flower", { opacity: 0 })
  .to("#bud", { opacity: 1 }, "<")

// Bud → Leaves
  .to("#bud", { opacity: 0 })
  .to("#extraLeaves", { opacity: 1 }, "<")

// Leaves → Sapling
  .to("#stem", { attr: { y2: 240 } })
  .to("#leaves", { scale: 0.7, transformOrigin: "center" })
  .to("#extraLeaves", { opacity: 0 });