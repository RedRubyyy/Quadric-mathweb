// QUERY SELECTOR
function $ (element) {
    return document.querySelector(element);
};
// QUERY SELECTORALL
function $$ (element) {
    return document.querySelectorAll(element);
};

// ADD EVENT HANDLER BY MINI FUNCTION
Element.prototype.on = function (event , handler) {
    this.addEventListener(event , handler)
}
NodeList.prototype.on = function (event , handler) {
    this.forEach(element => element.addEventListener(event , handler));
};

// DATAS SORT LOW TO HIGH && DATAS RANKING SORT (OBJ)
Object.prototype.datasRankBy = function (key) {
    this.sort((a , b) => {
        if (a[key] > b[key]) return -1;
    });
};
Object.prototype.datasSharpBy = function (key) {
    this.sort((a , b) => {
        if (a[key] < b[key]) return -1;
    });
};

// FILTER TYPE DATA
Array.prototype.filterType = function (type) {
    return this.filter(e => typeof e == type)
};
Array.prototype.clone = function (Array) {
    return [...Array]
}


// DATE GET
const date = new Date();
const time = {
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
// TOGGLE CLASS
Element.prototype.tgglCls = function (classList) {
    this.classList.toggle(classList);
};
NodeList.prototype.tgglCls = function (classList) {
    this.forEach(e => e.classList.toggle(classList));
};


function validationForm (fullfield , not , ...el) {
    const nodes = [...el]
    const status = nodes.every (element => element.value != "")

    if (status) {
        fullfield()
    }
    else {
        not()
    }
}