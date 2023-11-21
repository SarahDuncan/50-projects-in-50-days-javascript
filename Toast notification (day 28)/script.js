const button = document.querySelector('.show-btn');
const toasts = document.getElementById('toasts');

console.log(button);
console.log(toasts);

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

button.addEventListener('click', () => createNotification());

// my attempt:
function createNotification() {
  var index = Math.floor(Math.random() * messages.length);
  var messageToDisplay = messages[index];

  var childToAppend = document.createElement('div');
  childToAppend.classList.add('toast');
  childToAppend.innerText = messageToDisplay;
  toasts.appendChild(childToAppend);

  setTimeout(() => {
    childToAppend.remove();
  }, 3000);
}
