// POSITIVE
export function positive(a , b , c , printFunct) {
    // VARIABLE DEFINITION
    const diskriminan = (b * b) - (4 * a * c);
    const divider = (2 * a);
    const sqrt = Math.sqrt(diskriminan)
    const akar1 = (-b / divider) - (diskriminan /divider)
    const akar2 = (-b / divider) + (diskriminan /divider)
    // TXT START
    const descABC1 = `<p>Untuk mencari akar akar persamaan kuadrat kita harus menentukan a , b dan c</p>`
    const descABC2 = `<p>Bentuk umum persamaan kuadrat adalah ax2 × bx + c = 0 atau ax2 × bx = -c</p>`
    const descABC3 = `<p>Maka dari itu dapat ditentukan a = ${a} , b = ${b} dan c = ${c}</p>`;
    // TXT PART 1
    const text1 = `<p>x1,x2 = ${-b} ± √${b} × ${b} - 4 × ${a} × ${c}</p>`;
    const barrier1 = generateBarrier(text1); 
    const divider1 = `<p class="divider"> 2 × ${a}</p>`;
    // TXT PART 2
    const text2 = `<p>x1,x2 = ${-b} ± √${b * b} - ${4 * a * c}</p>`;
    const barrier2 = generateBarrier(text2);
    const divider2 = `<p class="divider"> ${2 * a}</p>`
    // TXT PART 3
    const text3 = `<p>x1,x2 = ${-b} ± √${(b * b) - (4 * a * c)}</p>`;
    const barrier3 = generateBarrier(text3);
    // TXT PART 4
    const text4 = `<p>x1,x2 = ${-b} ± ${sqrt}<p>`
    const barrier4 = generateBarrier(text4);
    // RESULT TXT
    const finally1 = `<p>x1 = (${-b} + ${sqrt}) / ${divider}      V      (${-b} - ${sqrt}) / ${divider}</p>`
    const finally2 = `<p>x1 = ${akar1}      V      x2 = ${akar2}</p>`
    const finally3 = `<p>Jadi akar-akarnya adalah ${akar1} dan ${akar2}`

    const gatheringText = [
        descABC1 , descABC2 , descABC3,
        text1 , barrier1 , divider1 ,
        text2 , barrier2 , divider2 ,
        text3 , barrier3 , divider2 ,
        text4 , barrier4 , divider2 ,
        finally1 , finally2 , finally3];
    printFunct(gatheringText)
};
// GENERATE BARRIER BLOCK
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