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

// Countdown Timer Function

// The current time

function countdown() {
  let daysSpan = document.querySelector(".events .days");
  let hoursSpan = document.querySelector(".events .hours");
  let minutesSpan = document.querySelector(".events .minutes");
  let secondsSpan = document.querySelector(".events .seconds");

  let eventDate = new Date("April 21, 2023 23:59:59").getTime();

  let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let timeDiff = eventDate - dateNow;

    let eventDays = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

    let hoursInMS = timeDiff % (1000 * 60 * 60 * 24);
    let eventHours = Math.floor(hoursInMS / (1000 * 60 * 60));

    let minutesInMS = timeDiff % (1000 * 60 * 60);
    let eventMinutes = Math.floor(minutesInMS / 1000 / 60);

    let SecondsInMS = timeDiff % (1000 * 60);
    let eventSeconds = Math.floor(SecondsInMS / 1000);

    daysSpan.innerHTML = eventDays < 10 ? `0${eventDays}` : eventDays;
    hoursSpan.innerHTML = eventHours < 10 ? `0${eventHours}` : eventHours;
    minutesSpan.innerHTML =
      eventMinutes < 10 ? `0${eventMinutes}` : eventMinutes;
    secondsSpan.innerHTML =
      eventSeconds < 10 ? `0${eventSeconds}` : eventSeconds;

    if (eventDays == 0) {
      clearInterval(counter);
    }
  }, 1000);
}

countdown();
