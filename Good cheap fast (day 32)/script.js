const cheap = document.getElementById('cheap');
const good = document.getElementById('good');
const fast = document.getElementById('fast');
const toggles = document.querySelectorAll('.toggle');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => checkToggles(e.target))
);

function checkToggles(target) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === target) {
      fast.checked = false;
    }
    if (cheap === target) {
      good.checked = false;
    }
    if (fast === target) {
      cheap.checked = false;
    }
  }
}
