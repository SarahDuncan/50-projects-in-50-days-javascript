const buttons = document.querySelectorAll('.ripple');

buttons.forEach((btn) => {
    btn.addEventListener('click', function (e) {

        // position of user click
        const x = e.clientX;
        const y = e.clientY;

        // position of button top and left
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // calculate the click from where the button starts
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        // remove element from dom
        setTimeout(() => circle.remove(), 500);
    })
})