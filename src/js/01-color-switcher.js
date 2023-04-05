const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
let startInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  startInterval = setInterval(() => {
    document.querySelector('body').style = `background: ${getRandomHexColor()}`;
  }, 1000);
});

stoptBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  clearInterval(startInterval);
});
