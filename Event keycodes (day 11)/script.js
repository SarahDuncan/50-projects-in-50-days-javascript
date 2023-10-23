const container = document.querySelector('.container');

window.addEventListener('keydown', (key) => {
  console.log(key);
  container.innerHTML = `
        <div class="key">
        ${key.key === ' ' ? 'Space' : key.key}
        <small>key.key</small>
        </div>
        
        <div class="key">
        ${key.keyCode}
        <small>event.keyCode</small>
        </div>

        <div class="key">
        ${key.code}
        <small>event.code</small>
        </div>
        `;
});
