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

// function checkForbidden(display) {
//     currVal = display.innerHTML
//     occurencesSingle = countOccurence(currVal, '.')
//     if (occurencesSingle < 1) {

//         return true
//     }
//     else return false
// }

// function countOccurence(stringToSplit, subString) {
//     return stringToSplit.split(subString).length -1
// }

function addToDisplay(value) {
    dotButton = document.getElementById("dot")
    // evalVal = displayVar.innerHTML.split(/[.\*+-/_]/)
    // console.log(evalVal)

    // if (value === '.') {
    //     evalVal = displayVar.innerHTML.split(/[\*+-/]/)
    //     console.log(evalVal)
    //     test = evalVal[evalVal.length-1]
    //     console.log(test)
    //     if (test === ''){

    //     }
    // }
    displayVar.innerHTML = displayVar.innerHTML + value
    console.log(displayVar.innerHTML)
    test123 = displayVar.innerHTML.split(/[\*+-/]/)
    console.log(test123)
    if (test123[test123.length-1] === '' && value === '.') {
        dotButton.disabled = true;
    } else dotButton.disabled = false;




/**if value is a dot, check to see that the latest subset doest contain a dot already */


    // if (displayVar.innerHTML.split('.').length -1 < 1 ) {
    //     displayVar.innerHTML = displayVar.innerHTML + value
    //     // dotButton.disabled = false;
    //     // console.log("should be enabled")
    //     // console.log(dotButton)
    // } else {
    //     // dotButton.disabled = true;
    //     // console.log("should be disabled")
    //     // console.log(dotButton)
    // }

    // if (checkForbidden(displayVar)) {
    //     displayVar.innerHTML = displayVar.innerHTML + value;
    // } else {alert('Too many .')}
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

/* Display */
let displayVar = document.querySelector("#math-box-numbers");

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