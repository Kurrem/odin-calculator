function calcAdd (a, b) {
    return a + b;
}

function calcSub (a, b) {
    return a - b;
}

function calcMult (a, b) {
    return a * b;
}

function calcDiv (a, b) {
    return a / b;
}

function operator (operator, var1, var2) {
    if (operator === '+') {
        return calcAdd(var1, var2);
    } else if (operator === '-') {
        return calcSub(var1, var2);
    } else if (operator === '*') {
        return calcMult(var1, var2);
    } else if (operator === '/') {
        return calcDiv(var1, var2);
    }
}

const var1 = 0;
const var2 = 0;
const operator = '';