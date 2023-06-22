export function blankDisplay (displayScreen) {
    displayScreen.value = '0';
};

export function displayResult (innerResult , mathOperation , displayScreen) {
    const operationDisplay = ['+' , '-' , '×' , '÷'];
    let innerPlaceholder = '';

    innerResult.forEach((element , index) => {
        if (mathOperation.includes(element)) {
            let i = mathOperation.indexOf(element)
            innerPlaceholder += operationDisplay[i];
        }
        else if (element == 'Math.sqrt()'){
            innerPlaceholder += '√';
        }
        else {
            innerPlaceholder += element;
        }
    });
    displayScreen.value = innerPlaceholder;
    if (innerPlaceholder == '') {
        blankDisplay(displayScreen);
    }
};