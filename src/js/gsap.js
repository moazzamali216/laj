gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("[class*='animate-']").forEach((el) => {

  let vars = {
    duration: parseFloat(el.dataset.duration) || 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  };

  // ✅ PRIORITY SYSTEM (important fix)

  // 1️⃣ ZOOM (highest priority visual effect)
  if (el.classList.contains("animate-zoom-in")) {
    vars.scale = 0.6;
    vars.opacity = 0;
  }
  else if (el.classList.contains("animate-zoom-out")) {
    vars.scale = 1.4;
    vars.opacity = 0;
  }
  else if (el.classList.contains("animate-z")) {
    vars.scale = 0.85;
    vars.opacity = 0;
  }

  // 2️⃣ MOVE animations
  if (el.classList.contains("animate-up")) vars.y = 60;
  if (el.classList.contains("animate-down")) vars.y = -60;
  if (el.classList.contains("animate-left")) vars.x = 60;
  if (el.classList.contains("animate-right")) vars.x = -60;

  // 3️⃣ delay
  vars.delay = parseFloat(el.dataset.delay) || 0;

  // 🚀 IMPORTANT: remove opacity override conflict
  // only set opacity if NOT zoom-based animation
  if (
    !el.classList.contains("animate-zoom-in") &&
    !el.classList.contains("animate-zoom-out") &&
    !el.classList.contains("animate-z")
  ) {
    vars.opacity = 0;
  }

  gsap.from(el, vars);
});