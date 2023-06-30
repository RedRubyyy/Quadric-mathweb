export function validationFunct (input1 , input2 , input3 , fulfilled , parameter) {
    if (input1.value == '' || input2.value == '' || input3.value ==''){
        alert("Masukkan semua input");
    }
    if(input1.value != '' && input2.value != '' && input3.value !=''){
        fulfilled(parameter)
    }
};

export function calculateSimetris(a , b , c , printFunct) {
    // VARIABLE DEFINED
    const sumbuSimetris = -b / (2 * a);
    // FRIST STEP
    const text1 = `<p>Untuk mencari sumbu simetris x adalah dengan rumus</p>`
    const step1 = `<p> -b </p>`
    const barrier1 = `<p class="barrier2">_____</p>`
    const divider1 = `<p class="barrier2">2 × a</p>`
    // STEP 2
    const text2 = `<p>Maka dapat ditentukan sumbu simetris x adalah`
    const step2 = `<p> ${-b} </p>`
    const barrier2 = `<p class="barrier2">_____</p>`
    const divider2 = `<p class="barrier2">2 × ${a}</p>`
    // FINAL RESULT
    const finally1 = `<p>Maka sumbu simetris dari persamaan ${a}x2 + ${b}x + ${c} = 0</p>`
    const finally2 = `<p>adalah ${sumbuSimetris}`

    const gatheringText = [
        text1 , step1 , barrier1 , divider1 ,
        text2, step2 , barrier2 ,divider2,
        finally1 , finally2
    ];
    printFunct(gatheringText)
}

export function calculateEkstrim (a, b ,c ,printFunct) {
    // VARIABLE DEFINED
    const diskriminan = (b * b) - (4 * a * c);
    const ekstirm = diskriminan / (-4 * a);
    // STEP 1
    const text1 = `<p>Untuk mencari sumbu ekstrim x adalah dengan rumus </p>`
    const step1 = `<p> D </p>`
    const barrier1 = `<p class="barrier2">_____</p>`
    const divider1 = `<p class="barrier2">-4 × a</p>`
    // STEP 2
    const text2 = `<p>Maka dapat ditentukan titik esktrim adalah </p>`
    const step2 = `<p>${diskriminan}</p>`
    const barrier2 = `<p class="barrier2">_____</p>`
    const divider2 = `<p class="barrier2">-4 × ${a}</p>`
    // FINAL RESULT
    const finally1 = `<p>Maka titik ekstrim dari persamaan ${a}x2 + ${b}x + ${c} = 0</p>`
    const finally2 = `<p>adalah ${ekstirm}`
    const gatheringText = [
        text1 , step1 , barrier1 , divider1,
        text2 , step2 , barrier2 , divider2 ,
        finally1 , finally2
    ]
    printFunct(gatheringText)
}