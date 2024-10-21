// import "./scroll-timeline.js";

// const lensBody = document.querySelector(".lens-body");

// const printerImage = document.querySelector("#printer-image");

// const scrollTrackingTimeline = new ScrollTimeline({
//   scrollOffsets: [CSS.percent(10), CSS.percent(50)],
// });

// lensBody.animate(
//   {
//     transform: ["translateX(0px)", "translateX(10px)"],
//   },
//   { duration: 1, timeline: scrollTrackingTimeline }
// );

// printerImage.animate(
//   { transform: ["translateX(200px)", "translateX(0px)"] },
//   {
//     duration: 1,
//     timeline: new ScrollTimeline({
//       scrollOffsets: [
//         { target: printerImage, edge: "start", treshold: "0" },
//         { target: printerImage, edge: "end", treshold: "0" },
//       ],
//     }),
//   }
// );

// const container = document.querySelector(".lens-body-wrapper");
// const image = document.querySelector(".lens-body");

// window.addEventListener("scroll", () => {
//   const scrollPercent =
//     (window.scrollY /
//       (document.documentElement.scrollHeight - window.innerHeight)) *
//     100;
//   const translateX = -scrollPercent + 110; // Adjust as needed

//   image.style.transform = `translateX(${translateX}%)`;
// });

// JavaScript
const container = document.querySelector(".lens-body-wrapper");
const image = document.querySelector(".lens-body");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        window.matchMedia("(orientation: landscape)").matches
      ) {
        image.style.transform = "translateX(-50%)"; // Slide in when the image becomes visible
        observer.unobserve(entry.target); // Stop observing once it's visible
      } else if (entry.isIntersecting) {
        image.style.transform = "translateX(-100vw)"; // Slide in when the image becomes visible
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.7, // Adjust the threshold as needed (0.5 means when at least 50% of the image is visible)
  }
);

observer.observe(container);

// Carousel Code

const carousel = document.querySelector(".carousel");
const cameraBack = document.querySelector(".camera-back");
const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
const prevButton = cameraBack.querySelector(".carousel-button-prev");
const nextButton = cameraBack.querySelector(".carousel-button-next");

let currentSlide = 0;

function goToSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
  currentSlide = index;
}

prevButton.addEventListener("click", () => {
  goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
});

goToSlide(0);
