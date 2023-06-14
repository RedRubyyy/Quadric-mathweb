// QUERY SELECTOR
function $ (element) {
    return document.querySelector(element)
};
// QUERY SELECTORALL
function $$ (element) {
    return document.querySelectorAll(element)
};
// ADD EVENT HANDLER BY MINI FUNCTION
NodeList.prototype.events = function (type , handler) {
    this.forEach(element => element.addEventListener(type , handler));
};
// DATAS RANKING SORT
Object.prototype.datasRank_by = function (key) {
    this.sort((a , b) => {
        if (a[key] > b[key]) return -1;
    });
};
// DATAS SORT TO HIGH
Object.prototype.datasSort_by = function (key) {
    this.sort((a , b) => {
        if (a[key] < b[key]) return -1;
    });
};
// FILTER TYPE DATA
Array.prototype.filterType = function (type) {
    return this.filter(e => typeof e == type)
};
Element.prototype.event = function (type , funt) {
    this.addEventListener(type , funt)
}
// DATE GET
const date = new Date();
const currentDate = {
    year : date.getFullYear(),
    month : date.getMonth(),
    day : date.getDate(),
    hour : date.getHours(),
    second : date.getSeconds(),
    milisecond : date.getMilliseconds()
};
// ELEMENT STYLING
function style (style) {
    return function (value) {
        if (style === "display") this.style.display = value;
        if (style === "color") this.style.color = value;
        if (style === "background") this.style.background = value;
        if (style === "padding") this.style.padding = value;
        if (style === "margin") this.style.margin = value;
    };
};
// ADD PROTOTYPE
Element.prototype.display = style('display');
Element.prototype.background = style('background');
Element.prototype.color = style('color');
Element.prototype.padding = style('padding');
Element.prototype.margin = style('margin');
// $('button').background('red');