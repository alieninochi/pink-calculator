const input = document.querySelector('#screen');
const numberButton = document.querySelectorAll('.number');
const numberSign = document.querySelector('.num-sign');
const percent = document.querySelector('.percent');
const cancel = document.querySelector('.cancel');
const del = document.querySelector('.delete');

// numberButton.addEventListener('click', () => {
//     input.value += numberButton.innerText;
// });

numberButton.forEach(element => {
    element.addEventListener('click', () => {
        input.value += element.innerText;
    });
});

cancel.addEventListener('click', () => {
    input.value = '';
});

// del.addEventListener('click', evt => {
//     input.value.length -= 1;
// });