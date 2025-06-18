// main.js – GSAP + Locomotive Scroll integration

const scrollContainer = document.querySelector("[data-scroll-container]");

const locoScroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  lerp: 0.1,
  multiplier: 1.2,
  getDirection: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: scrollContainer.style.transform ? "transform" : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

gsap.utils.toArray(".project-card, .about, .content, .hero-content").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      scroller: scrollContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });
});