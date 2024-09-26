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
    if (op === '+') {
        return calcAdd(var1, var2);
    } else if (op === '-') {
        return calcSub(var1, var2);
    } else if (op === '*') {
        return calcMult(var1, var2);
    } else if (op === '/') {
        if (var2 === 0) {
            alert("Dividing by zero is rather naughty now isn't it? You naught naughty!")
            clearDisplay()
            return ''
        } else {
            return calcDiv(var1, var2);
        }
    }
}

function addToDisplay(value) {
    displayVar.innerHTML = displayVar.innerHTML + value;
}

function clearDisplay() {
    displayVar.innerHTML = ''
}

function evalDisplay(toEval) {
    evalVal = toEval.split(/[.\*+-/_]/)
    evalOp = toEval.match(/[.\*+-/_]/g)

    result = evalVal.reduce((sum, current, index) => {
        return operator(evalOp[index-1], parseFloat(sum), parseFloat(current))
    })
    
    displayVar.innerHTML = result
}

let displayVar = document.querySelector("#math-box-numbers");
const var1 = 0;
const var2 = 0;
const op = '';


/* Builds the numpad for the calculator */
numpad = document.querySelector("#numpadNumbers");
for (let i = 1; i < 4; i++) {
    numpadCol = document.createElement("div")
    numpadCol.classList.add("numpadCol")
    for (let j = i; j < 10; j+=3) {
        numpadButton = document.createElement("button")
        numpadButton.classList.add("numpadButton")
        numpadButton.innerHTML = j
        numpadCol.appendChild(numpadButton)
    }
    numpad.appendChild(numpadCol)
}

/* Attaches the addToDisplay function to each button */
numpadButtonsAll = document.querySelectorAll("button")
for (const val of numpadButtonsAll) {
    if (val.innerHTML === '=') {
        val.addEventListener("click", () => {
            evalDisplay(displayVar.innerHTML)
        })
    } else if (val.innerHTML === 'C') {
        val.addEventListener("click", () => clearDisplay())
    } else {
    val.addEventListener("click", () => {
        addToDisplay(val.innerHTML)
    })}
}