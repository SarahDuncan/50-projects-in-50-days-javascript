var cups = document.querySelectorAll('.cup-small');
var litres = document.getElementById('litres');
var percentage = document.getElementById('percentage');
var remaining = document.getElementById('remained');

updateBigCup();

// loop through small cups to add event listener functions
cups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    cups[idx].classList.contains('full') &&
    !cups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  // highlight all cups before the one that has been clicked on too
  cups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
}

// update the big cup
function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = cups.length;

  // hide the percentage value
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remaining.style.visibility = 'hidden';
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = 'visible';
    litres.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
