console.log(math.evaluate('1+2+9'));
const input = document.querySelector('#screen');
const numberButton = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

const numberSign = document.querySelector('.num-sign');
const dot = document.querySelector('.dot');
const percent = document.querySelector('.percent');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal');

clear.addEventListener('click', () => {
    input.value = '0';
});

del.addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length - 1);
});

numberButton.forEach(element => {
    element.addEventListener('click', () => {
        if (input.value.indexOf('0') === 0 && input.value.length === 1) {
            input.value = '';
        }

        input.value += element.innerText;
    });
});

dot.addEventListener('click', () => {
    let lastSymbol = input.value[input.value.length - 1];
    if ( lastSymbol === '.') {
        input.value += '';
    } else {
        input.value += '.';
    }
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

operators.forEach(element => {
    element.addEventListener('click', () => {
        input.value += element.innerText;
    });
});

percent.addEventListener('click', () => {
    if (input.value.indexOf('%') !== -1) {
        input.value += '';
    } else {
        input.value += '%';
    }
});

equal.addEventListener('click', () => {
    if (input.value.indexOf('%') !== -1) {
        getPercentage();
    } else {
        handleMath();
    }
});

function replaceSign(str) {
    const symbols = str.split('');

    for (let i = 0; i < symbols.length; i++) {
        if (symbols[i] === '÷') {
            symbols[i] = '/';
        } else if (symbols[i] === '×') {
            symbols[i] = '*';
        }
    }

    return symbols.join('');
}

function handleMath() {
    const newExp = replaceSign(input.value);

    const result = math.evaluate(newExp);
    input.value = math.format(result, {precision: 14});
}

function getPercentage() {
    const values = input.value.split('%');
    const value1 = math.evaluate( replaceSign(values[0]) );
    const value2 = math.evaluate( replaceSign(values[1]) );

    const result = Number(value1) / 100 * Number(value2);

    input.value = math.format(result, {precision: 14});
}