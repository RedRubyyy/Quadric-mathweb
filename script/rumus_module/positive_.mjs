// POSITIVE
export function positive(a , b , c , printFunct) {
    // VARIABLE DEFINITION
    const diskriminan = (b * b) - (4 * a * c);
    const divider = (2 * a);
    const sqrt = Math.sqrt(diskriminan)
    const akar1 = (-b / divider) - (diskriminan /divider)
    const akar2 = (-b / divider) + (diskriminan /divider)
    // DESC FRIST
    const text1 = `<p>Untuk mencari akar akar persamaan kuadrat kita harus menentukan a , b dan c</p>`
    const text2 = `<p>Bentuk umum persamaan kuadrat adalah ax2 × bx + c = 0 atau ax2 × bx = -c</p>`
    const text3 = `<p>Maka dari itu dapat ditentukan a = ${a} , b = ${b} dan c = ${c}</p>`;
    // COUNT 1
    const count1 = `<p>x1,x2 = ${-b} ± √${b} × ${b} - 4 × ${a} × ${c}</p>`;
    const barrier1 = generateBarrier(count1); 
    const divider1 = `<p class="divider"> 2 × ${a}</p>`;
    // COUNT 2
    const count2 = `<p>x1,x2 = ${-b} ± √${b * b} - ${4 * a * c}</p>`;
    const barrier2 = generateBarrier(count2);
    const divider2 = `<p class="divider"> ${2 * a}</p>`
    // COUNT 3
    const count3 = `<p>x1,x2 = ${-b} ± √${(b * b) - (4 * a * c)}</p>`;
    const barrier3 = generateBarrier(count3);
    // COUNT 4
    const count4 = `<p>x1,x2 = ${-b} ± ${sqrt}<p>`
    const barrier4 = generateBarrier(count4);
    // RESULT TXT
    const finally1 = `<p>x1 = (${-b} + ${sqrt}) / ${divider} dan x2 = (${-b} - ${sqrt}) / ${divider}</p>`
    const finally2 = `<p>x1 = ${akar1} dan x2 = ${akar2}</p>`
    const finally3 = `<p>Jadi akar-akarnya adalah ${akar1} dan ${akar2}`

    const gatheringText = [
        text1 , text2 , text3,
        count1 , barrier1 , divider1 ,
        count2, barrier2 , divider2 ,
        count3 , barrier3 , divider2 ,
        count4 , barrier4 , divider2 ,
        finally1 , finally2 , finally3];
    printFunct(gatheringText)
};

// GENERATE BARRIER BLOCK FUNCTION
function generateBarrier (upperText) {
    let ress = `<p class="barrier">`
    for (let i = 0 ; i < upperText.length - 13 ; i++){
        ress += `_`
        if (i == upperText.length - 14) {
            ress += `</p>`
        };
    };
    return ress
};