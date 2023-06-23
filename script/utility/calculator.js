const btnsCalculate = $$('.btn-calculate');
const displayScreen = $(".display-screen");
const mathOperation = ['+','-','*','/'];
const number = ['0','1','2','3','4','5','6','7','8','9','.'];

import { displayResult , blankDisplay} from "./cmodule.mjs";
let innerResult = [];
$('#button-switch').on('click' , () => {
    innerResult = []
    $('.display-screen').value = '0';
    $('.result').innerHTML = ''
})

    document.body.on('keypress' , (evnt) => {
        if ($('.calculator-frame').classList.contains('active-keyboard')) {
            if (evnt.key == 'Enter') {
                calculate()
            }else{
            const lastElement = innerResult[innerResult.length - 1];
            if (mathOperation.includes(evnt.key)) {
                if (mathOperation.includes(lastElement)) {
                    innerResult.pop();
                };
                innerResult.push(evnt.key)
            };
            number.includes(evnt.key) ? innerResult.push(evnt.key) : 'not number';
            if (innerResult.length == 1 && mathOperation.includes(evnt.key)) {
                innerResult = [];
            };
            displayResult(innerResult , mathOperation , displayScreen);
            }
        }else {
            return
        }
    })


btnsCalculate.forEach(element => {
    element.on('click' , () => {
        const lastElement = innerResult[innerResult.length - 1];
        if (mathOperation.includes(element.value)) {
            if (mathOperation.includes(lastElement)) {
                innerResult.pop();
            };
        };
        innerResult.push(element.value);
        if (innerResult.length == 1 && mathOperation.includes(element.value)) {
            innerResult = [];
        };


        displayResult(innerResult , mathOperation , displayScreen);
    }); // End Event Hendler
}); // End For Each

$('.btn-result-calculate').on('click' , () => {
    calculate()
});

$('.btn-clear-calculate').on('click' , () => {
    innerResult = [];
    blankDisplay(displayScreen);
});

$('.btn-remove-calculate').on('click' , () => {
    if (innerResult.length < '2') {
        innerResult = []
        blankDisplay(displayScreen);
    }
    else{
        innerResult.pop()
        displayResult(innerResult , mathOperation , displayScreen);
    };
});


$('.btn-sqrd-calculate').on('click' , () => {
    if (mathOperation.includes(innerResult[innerResult.length-1])){
        innerResult.push('Math.sqrt()');
    }
    else if (innerResult.length == '0') {
        innerResult.push('Math.sqrt()');
    }
    else {
        innerResult.push("*" , 'Math.sqrt()');
    }
    displayResult(innerResult , mathOperation , displayScreen);
    // console.log(innerResult);
});
$('.btn-quad-calculate').on('click' , () => {
    const lastElement = innerResult[innerResult.length-1];
    if (innerResult.length == '0' || mathOperation.includes(lastElement) || lastElement.includes('²') || lastElement == 'Math.sqrt()') {
        return
    } else {
        let quadNumber = ''
        let innerResult_reversed = [...innerResult].reverse();
        // console.log(innerResult_reversed);
        reverseSearch:
        for (let i = 0; innerResult_reversed.length > i ; i++) {
            if (mathOperation.includes(innerResult_reversed[i])|| innerResult_reversed[i] == 'Math.sqrt()'){
                break reverseSearch;
            }
            else{
                quadNumber += innerResult_reversed[i] 
                innerResult.pop()
            }
        }
        const quadNumber_reversed = Array.from(quadNumber).reverse()
        innerResult.push(`${quadNumber_reversed.join('')}²`)
        displayResult(innerResult , mathOperation , displayScreen);
    }
})

function calculate () {
    const calculateArray = [];
    var onSqrt = false;
    var includeQ = false
    var numberSqrt = '';
if (mathOperation.includes(innerResult[innerResult.length -1])){
    innerResult.pop();
}
    innerResult.forEach((element , index) => {
        if (element == "Math.sqrt()") {
            onSqrt = true;
            const arraySqrt = innerResult.slice(index + 1 , innerResult.length);
            loopSqrt :
            for (let i = 0; arraySqrt.length > i ; i++) {
                if (mathOperation.includes(arraySqrt[i])) {
                    break loopSqrt;
                }
                else if (arraySqrt[i].includes('²')) {
                    let pushQ = arraySqrt[i].slice(0 , arraySqrt[i].length - 1)
                    numberSqrt += `${pushQ} * ${pushQ}`
                    includeQ = true
                }
                else{
                    numberSqrt += arraySqrt[i];
                }
            };
            calculateArray.push(`Math.sqrt(${numberSqrt})`);
        }else if (element.includes('²')) {
            if (includeQ == true) {return}
            else {
            const quadNumber =  element.slice(0 , element.length-1)
            calculateArray.push(`${quadNumber} * ${quadNumber}`);
            }
        }
        else {
            if (onSqrt) {
                if(mathOperation.includes(element)) {
                    onSqrt = false;
                    calculateArray.push(element);
                }else {
                    return;
                }
            }else{
                calculateArray.push(element);
            }
        }
    });
    let resultStrings = calculateArray.join('');

    resultStrings == '' ? nul() : notNul()
    function nul () {
        displayScreen.value = '0'
        innerResult = []
    }
    function notNul () {
        displayScreen.value = eval(resultStrings);
        innerResult = Array.from(`${eval(resultStrings)}`);
    }
}