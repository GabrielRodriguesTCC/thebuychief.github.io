const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;
let timer = null;
let isTransitioning = false;

function update(direction) {
  if (isTransitioning) return;
  isTransitioning = true;

  items[active].classList.remove('active');
  dots[active].classList.remove('active');

  active = (active + direction + total) % total;

  items[active].classList.add('active');
  dots[active].classList.add('active');
  numberIndicator.textContent = String(active + 1).padStart(2, '0');

  setTimeout(() => {
    isTransitioning = false;
  }, 700); 
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => update(1), 5000);
}

prevButton.addEventListener('click', () => {
  update(-1);
  resetTimer();
});

nextButton.addEventListener('click', () => {
  update(1);
  resetTimer();
});

resetTimer();
