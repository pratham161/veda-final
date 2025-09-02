gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.5,
  smoothTouch: 0.1,
  effects: true,
});

const tl = gsap.timeline();

tl.to(".loading", {
  width: "100%",
  duration: 0.7,
  delay: 0.3,
})
.to(".capsuleLogo", {
  scale: 2,
  duration: 0.5,
  opacity: 0,
}, 'a')
.to(".capsul", {
  clipPath: "inset(0% 0% 0% 0%)",
}, 'a')

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    start: "90% 80%",
    end: "155% 80%",
    // markers: true,
    scrub: true,
  }
})

tl1.to("#bgImage", {
  transform: "scale(1.05)",
})

// page2 animation

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "28% 70%",
    end: "100% 70%",
    // markers: true,
    scrub: 1,
  }
})

tl2.to(".page2 .bottom", {
  y: 760,
})

// page3 animation

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "25% 50%",
    end: "60% 50%",
    // markers: true,
    scrub: 1,
  }
})

tl3.to(".hide", {
  top: "-100%",
  stagger: 0.1
})

// page4 animation
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    start: "30% 30%",
    end: "220% 30%",
    // markers: true,
    scrub: 1,
    pin: true,

    // this two is used to define the ending animation after the scrolltrigger is ended.
    // onLeave:
    // onEnterBack:
  }
})


tl4.to(".box h3", {
  opacity: 0,
}, 'a')
.to(".page4 .background", {
  width: "calc(100vw - 1rem)",
  height: "calc(100vh - 1rem)",
  borderRadius: "3.5rem",
  y: -40,
}, 'a')
.to(".page4 .background img", {
  transform: "scale(1)",
}, 'a')
.from(".background .topText h4, .background .topText h3, .background .bottomText h3", {
  opacity: 0,
  x: 50,
})
tl4.to({}, { duration: 0.4 }, "+=0")

.to("#second", {
  transform: "translate(-50%, -56%)",
}, 'b')
.to("#second img", {
  transform: "scale(1)",
}, 'b')
.to(".page4 .background", {
  scale: 0.9,
  opacity: 0,
  y: -50
}, 'b')
.from(" #second .topText h4, #second .topText h3, #second .bottomText h3", {
  opacity: 0,
  x: 50,
})
tl4.to({}, { duration: 0.4 }, "+=0")

.to("#third", {
  transform: "translate(-50%, -56%)",
}, 'c')
.to("#third img", {
  transform: "scale(1)",
}, 'c')
.to("#second", {
  scale: 0.9,
  opacity: 0,
}, 'c')
.from("#third .topText h4, #third .topText h3, #third .bottomText h3", {
  opacity: 0,
  x: 50,
})
tl4.to({}, { duration: 0.4 }, "+=0")

.to("#fourth", {
  transform: "translate(-50%, -56%)",
}, 'd')
.to("#fourth img", {
  transform: "scale(1)",
}, 'd')
.to("#third", {
  scale: 0.9,
  opacity: 0,
}, 'd')
.from("#fourth .topText h4, #fourth .topText h3, #fourth .bottomText h3", {
  opacity: 0,
  x: 50,
})
tl4.to({}, { duration: 0.4 }, "+=0")

.to("#fifth", {
  transform: "translate(-50%, -56%)",
}, 'e')
.to("#fifth img", {
  transform: "scale(1)",
}, 'e')
.to("#fourth", {
  scale: 0.9,
  opacity: 0,
}, 'e')
.from("#fifth .topText h4, #fifth .topText h3, #fifth .bottomText h3", {
  opacity: 0,
  x: 50,
})
tl4.to({}, { duration: 0.4 }, "+=0")

// Open menu
const menuBtns = document.querySelectorAll(".menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

menuBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    menuOverlay.classList.add("active");

    // GSAP animation for menu items
    gsap.from(".menuContent ul li", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    });
  });
});

// Close menu
closeMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});

// Quote Modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("quoteModal");
  const openBtn = document.querySelector(".quoteBtn"); // Get Quote button
  const closeBtn = modal.querySelector(".close-btn");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex"; // show modal
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none"; // close modal
    });
  }

  document.querySelectorAll('.menuContent a').forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });
});

  // Close modal when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
