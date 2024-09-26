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

function operator (op, var1, var2) {
    if (operator === '+') {
        return calcAdd(var1, var2);
    } else if (op === '-') {
        return calcSub(var1, var2);
    } else if (op === '*') {
        return calcMult(var1, var2);
    } else if (op === '/') {
        return calcDiv(var1, var2);
    }
}

function addToDisplay(value) {
    displayVar = displayVar + value;
    console.log(displayVar)
}

let displayVar = '';
const var1 = 0;
const var2 = 0;
const op = '';

numpad = document.querySelector("#numpadNumbers");
for (let i = 1; i < 4; i++) {
    numpadCol = document.createElement("div")
    numpadCol.classList.add("numpadCol")
    for (let j = i; j < 10; j+=3) {
        numpadButton = document.createElement("button")
        numpadButton.classList.add("numpadButton")
        numpadButton.innerHTML = j
        numpadButton.addEventListener("click", () => {
            addToDisplay(j)
        })
        numpadCol.appendChild(numpadButton)
    }
    numpad.appendChild(numpadCol)
}