const inputA = $('#input-a');
const inputB = $('#input-b');
const inputC = $('#input-c');
const resultLog = $('.result')
var proges = "none";

import{ positive }from "./rumus_module/positive_.mjs";
import { negative } from "./rumus_module/negative_.mjs";
import { validationFunct , calculateSimetris , calculateEkstrim} from "./rumus_module/more_function.mjs";

async function printProcessing (textAll) {
    let txt = textAll.reduce((acc , curr) => {
        return acc + curr;
    });
    proges = 'aviable'
    let i = 1;
    const interval = await setInterval(() => {
        resultLog.innerHTML = txt.slice(0 , i)
        if (txt[i] == "<") i=i+3;
        else i=i+1;

        if (i == txt.length + 1) {
            clearInterval(interval)
            proges = 'none'
        };
    },3)
    
};

$('#result-button').on('click' , () => {
    if (proges == "aviable") {alert('ada proges yang masih berjalan')}
    if (proges == "none") {
        validationFunct (inputA , inputB , inputC , action , $('#selected-act'))
    }
});

function action (e) {
    switch (e.value) {
        case 'akar' :
            calculateAkar(inputA.value , inputB.value , inputC.value);
            break;
        case 'simetris' :
            calculateSimetris(inputA.value , inputB.value , inputC.value , 
                printProcessing);
            break;
        case 'ekstrim' :
            calculateEkstrim(inputA.value , inputB.value , inputC.value , 
                printProcessing);
            break
        default:
    };
};

function calculateAkar(a , b , c) {
    let Diskriminan = (b * b) - (4 * a * c);
    Diskriminan > 0 ? positive(a , b , c , printProcessing) : negative(a , b , c , printProcessing)
};

export {
    inputA , inputB,
    inputC ,action,
    proges
};