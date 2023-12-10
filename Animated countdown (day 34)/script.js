const nums = document.querySelectorAll('.nums span');
const replayBtn = document.getElementById('replay');
const counterEl = document.querySelector('.counter');
const finalMessageEl = document.querySelector('.final');

runAnimation();

function resetDOM() {
  counterEl.classList.remove('hide');
  finalMessageEl.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num, idx) => {
    var nextToLast = nums.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx != nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counterEl.classList.add('hide');
        finalMessageEl.classList.add('show');
      }
    });
  });
}

replayBtn.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});
