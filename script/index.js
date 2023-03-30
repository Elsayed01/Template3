// Progressing stats with scrolling
const ourSkillsSection = document.querySelector("#our-skills");
let progressBars = document.querySelectorAll(".skill-prog .prog span");

function progressWithScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= ourSkillsSection.offsetTop - 150) {
      progressBars.forEach((span) => {
        span.style.width = `${span.dataset.width}%`;
      });
    } else {
      progressBars.forEach((span) => {
        span.style.width = `0%`;
      });
    }
  });
}

progressWithScroll();

/* ------------------------------------------------------------ */
