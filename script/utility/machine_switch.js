const heroDesc = $('#hero-desc');
const subDesc = $('#sub-desc');
const btnSwitch = $('#button-switch');
const frameQuadric = $('.frame-quadric-machine');
const frameCalculator = $('.calculator-frame');
btnSwitch.on('click' , () => {
    $('.calculator-frame').classList.toggle('active-keyboard')
    btnSwitch.textContent == 'CALCULATOR' ? block_calculator() : block_quadric();
});
function block_calculator () {
    frameQuadric.style.display = "none";
    frameCalculator.style.display = 'block';
    btnSwitch.textContent = 'QUADRIC';
    heroDesc.textContent = "YOU NEED QUADRIC";
    subDesc.textContent = 'Klik untuk memunculkan Form persamaan';
};
function block_quadric () {
    frameQuadric.style.display = "block";
    frameCalculator.style.display = 'none';
    btnSwitch.textContent = 'CALCULATOR';
    heroDesc.textContent = "YOU NEED CALCULATOR";
    subDesc.textContent = 'Klik untuk memunculkan mesin kalkulator';
};