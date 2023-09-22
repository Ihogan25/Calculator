//variables
const numsArr = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9'),
    document.getElementById('point'),
    document.getElementById('pon')
]
const operandsArr = [
    document.getElementById('add'),
    document.getElementById('sub'),
    document.getElementById('multi'),
    document.getElementById('div'),
]
const dltBtnsObj = {
    clear: document.getElementById('clear'),
    clearAll: document.getElementById('clear-all')
}
const displayObj = {
    inputOne: document.getElementById('input-one'),
    inputTwo: document.getElementById('input-two'),
    operand: document.getElementById('operand'),
    output: document.getElementById('output')
}

let calc = document.getElementById('calc');
let firstNum = 0
let secondNum = 0
let operand = ''
//math functions
const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
    
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return a / b;
}


dltBtnsObj.clear.addEventListener('click', ()=> {
    let arrOne = displayObj.inputOne.textContent.match(/\d/g);
    let arrTwo = displayObj.inputTwo.textContent.match(/\d/g);

    if(displayObj.inputOne.textContent.length > 0 && displayObj.operand.textContent == '') {
        arrOne.pop()
        displayObj.inputOne.textContent = arrOne.join('')
    }
    else {
        arrTwo.pop()
        displayObj.inputTwo.textContent = arrTwo.join('')
    }
})

dltBtnsObj.clearAll.addEventListener('click', ()=>{
    displayObj.inputOne.textContent = ''
    displayObj.operand.textContent = ''
    displayObj.inputTwo.textContent = ''
    displayObj.output.textContent = ''

})

numsArr.forEach(num => {
    num.addEventListener('click', ()=> {
        if(displayObj.operand.textContent == '') {
            displayObj.inputOne.textContent += num.textContent;
        }
        else {
            displayObj.inputTwo.textContent += num.textContent;
        }
    })
})

operandsArr.forEach(opp => {
    opp.addEventListener('click', ()=> {
        displayObj.operand.textContent = opp.textContent
    })
})


calc.addEventListener('click', ()=> {
    firstNum = parseFloat(displayObj.inputOne.textContent);
    secondNum = parseFloat(displayObj.inputTwo.textContent);
    operand = displayObj.operand.textContent;

    if(operand == '+') {
        displayObj.output.textContent = add(firstNum, secondNum)
    }
    else if(operand == '-') {
        displayObj.output.textContent = subtract(firstNum, secondNum)

    }
    else if(operand == 'x') {
        displayObj.output.textContent = multiply(firstNum, secondNum)
    }
    else{
        displayObj.output.textContent = divide(firstNum, secondNum)
    }
})

