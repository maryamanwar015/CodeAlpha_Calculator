// Neon Tilt animation
VanillaTilt.init(document.querySelector(".container"), {
  max: 10,
  speed: 500,
  glare: true,
  "max-glare": 0.4,
});

// Smooth glowing border animation
const container = document.querySelector(".container");
setInterval(() => {
  container.style.boxShadow = `0 0 10px ${getRandomColor()}, 0 0 60px ${getRandomColor()}`;
}, 2000);

function getRandomColor() {
  const colors = ["#42c4a7ff", "#00bfff", "#8d35a2ff", "#a78b43ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}
