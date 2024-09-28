let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = undefined;

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput = currentInput.toString() + number.toString();
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function updateDisplay() {
    display.innerText = currentInput || previousInput || '0';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = undefined;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = undefined;
    previousInput = '';
    updateDisplay();
}
