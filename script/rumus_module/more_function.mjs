export function validationFunct (input1 , input2 , input3 , fulfilled , parameter) {
    if (input1.value == '' || input2.value == '' || input3.value ==''){
        alert("Masukkan semua input");
    }
    if(input1.value != '' && input2.value != '' && input3.value !=''){
        fulfilled(parameter)
    }
};

export function calculateSimetris(a , b , c , printFunct) {
    const sumbuSimetris = -b / (2 * a);
    const text1 = `<p>Untuk mencari sumbu simetris x adalah dengan rumus -b </p>`
    const barrier = `<p class="barrier2">_____</p>`
    const divider1 = `<p class="divider2">2 × a</p>`
    const settlement1 = `<p>Maka dapat ditentukan sumbu simetris x adalah ${-b}`
    const barrier2 = `<p class="barrier2-5">_____</p>`
    const divider2 = `<p class="divider2-5">2 × ${a}</p>`
    const ress1 = `<p>Maka sumbu simetris dari persamaan ${a}x2 + ${b}x + ${c} = 0</p>`
    const ress2 = `<p>adalah ${sumbuSimetris}`
    const text = [
        text1 , barrier , divider1 ,
        settlement1 , barrier2 ,divider2,
        ress1 , ress2
    ];
    printFunct(text)
}

export function calculateEkstrim (a, b ,c ,printFunct) {
    const diskriminan = (b * b) - (4 * a * c);
    const ekstirm = diskriminan / (-4 * a);
    const text1 = `<p>Untuk mencari sumbu ekstrim x adalah dengan rumus D </p>`
    const barrier = `<p class="barrier2">_____</p>`
    const divider1 = `<p class="divider2">-4 × a</p>`
    const settlement1 = `<p>Maka dapat ditentukan titik esktrim adaladh ${diskriminan}</p>`
    const barrier2 = `<p class="barrier2-5">_____</p>`
    const divider2 = `<p class="divider2-5">-4 × ${a}</p>`
    const ress1 = `<p>Maka titik ekstrim dari persamaan ${a}x2 + ${b}x + ${c} = 0</p>`
    const ress2 = `<p>adalah ${ekstirm}`
    const text = [
        text1 , barrier , divider1 ,
        settlement1 , barrier2 , divider2 ,
        ress1 , ress2
    ]
    printFunct(text)
}