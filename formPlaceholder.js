/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */

const Placeholder = function (selector = '.placeholder') {
    const placeholders = document.querySelectorAll(selector);
    for (let placeholder of placeholders) {
        const input = placeholder.parentNode.querySelector('input,textarea');
        if (input) {
            input.oninput = () => placeholder.classList.add('active');
            input.onfocus = () => placeholder.classList.add('active');
            input.onblur = () => input.value === '' && placeholder.classList.remove('active');
            input.value.length && placeholder.classList.add('active');
        }
    }
    this.reset = () => placeholders.forEach(el => el.classList.remove('active'));
};

export default Placeholder;