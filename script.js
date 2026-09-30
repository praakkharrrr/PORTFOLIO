javascript
/* =========================================================
   PORTFOLIO INTERACTIONS
========================================================= */


/* =========================================================
   CURSOR GLOW
========================================================= */

const glow = document.querySelector(".glow");

window.addEventListener("mousemove", (event) => {
  if (!glow) return;

  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});


/* =========================================================
   SCROLL PROGRESS BAR
========================================================= */

const progressBar = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  if (!progressBar) return;

  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  progressBar.style.width = `${progress}%`;
});


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("#nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });
  });
}


/* =========================================================
   PROJECT CARD 3D TILT
========================================================= */

document.querySelectorAll(".project").forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    // Disable 3D effect on mobile/tablet
    if (window.innerWidth < 851) return;

    const rect = card.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    const rotateX = -y * 3;
    const rotateY = x * 4;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  });


  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });

});
