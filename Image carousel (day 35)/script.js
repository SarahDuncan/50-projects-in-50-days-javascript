const imagesEl = document.querySelector('.image-container');
const image = document.querySelectorAll('#imgs img');
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > image.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = image.length - 1;
  }

  imagesEl.style.transform = `translateX(${-idx * 500}px)`;
}

prevBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});

nextBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval.setInterval(run, 2000);
}
