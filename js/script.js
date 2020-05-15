const input = document.querySelector('#screen');
const numberButton = document.querySelectorAll('.number');
const numberSign = document.querySelector('.num-sign');
const percent = document.querySelector('.percent');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const dot = document.querySelector('.dot');

numberButton.forEach(element => {
    element.addEventListener('click', () => {
        input.value += element.innerText;
    });
});

dot.addEventListener('click', () => {
    if (input.value.indexOf('.') !== -1) {
        input.value += '';
    } else {
        input.value += '.';
    }
});

clear.addEventListener('click', () => {
    input.value = '';
});

del.addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length - 1);
});

numberSign.addEventListener('click', () => {
    if (input.value.indexOf('-') !== -1) {
        input.value = input.value.slice(1);
    } else if (input.value === '') {
        input.value = '-';
    } else {
        input.value = `-${input.value}`;
    }
});