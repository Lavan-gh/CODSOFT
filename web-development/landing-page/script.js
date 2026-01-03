
const scrollBtn = document.getElementById("scroll-top");
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const learnBtn = document.getElementById("learn-more");
learnBtn.addEventListener("click", () => {
  document.getElementById("features").scrollIntoView({ behavior: 'smooth' });
});
