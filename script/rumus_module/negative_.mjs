// IF DISKRIMINAN NEGATIVE
export function negative(a , b , c , printFunct) {
    //VARIABLE DEFINED
    const diskriminan = (b * b) - (4 * a * c);
    //START
    const descABC1 = `<p>Untuk mencari akar akar persamaan kuadrat kita harus menentukan a , b dan c</p>`
    const descABC2 = `<p>Bentuk umum persamaan kuadrat adalah ax2 + bx + c = 0 atau ax2 + bx = -c</p>`
    const descABC3 = `<p>Maka dari itu dapat ditentukan a = ${a} , b = ${b} dan c = ${c}</p>`;

    const rumusDisk = `<p>Rumus diskriminan adalah b × b - 4 × a × c`
    const textDesc = `<p>Diskriminan dari ${a}x2 + ${b}x + ${c} = 0 Adalah = ${diskriminan}</p>`

    const result1 = `<p>Diskriminan negative maka akar-akarnya adalah tidak real atau imajiner</p>`
    const result2 = `<p>Diskriminan = ${diskriminan}</p>`
    const text = [
        descABC1 , descABC2 , descABC3 , rumusDisk ,
        textDesc , result1 , result2
    ]
    printFunct(text)
};