function addition(a, b) {
    const result = a + b;
    return result;
}

const additionFunction = function (a, b) {
    const result = a + b;
    return result;
};

const arrowAddition = (a, b) => {
    const result = a + b;
    return result;
};

function subtraction(a, b) {
    const result = a - b;
    return result;
}

const subtractionFunction = function (a, b) {
    const result = a - b;
    return result;
};

const arrowSubtraction = (a, b) => {
    const result = a - b;
    return result;
};

function multiplication(a, b) {
    const result = a * b;
    return result;
}

const multiplicationFunction = function (a, b) {
    return a * b;
};

const arrowMultiplication = (a, b) => a * b;

function division(a, b) {
    const result = a / b;
    return result;
}

const divisionFunction = function (a, b) {
    const result = a / b;
    return result;
}

const arrowDivision = (a, b) => {
    const result = a / b;
    return result;
}

function remainder(a, b) {
    const result = a % b;
    return result;
}

const remainderFunction = function (a, b) {
    const result = a % b;
    return result;
}

const arrowRemainder = (a, b) => {
    const result = a % b;
    return result;
}

function more(a, b) {
    const result = a > b;
    return result;
}

const moreFunction = function (a, b) {
    const result = a > b;
    return result;
}

const arrowMore = (a, b) => {
    const result = a > b;
    return result;
}

function less(a, b) {
    const result = a < b;
    return result;
}

const lessFunction = function (a, b) {
    const result = a < b;
    return result;
}

const arrowLess = (a, b) => {
    const result = a < b;
    return result;
}

function moreOrEquals(a, b) {
    const result = a >= b;
    return result;
}

const moreOrEqualsFunction = function (a, b) {
    const result = a >= b;
    return result;
}

const arrowMoreOrEquals = (a, b) => {
    const result = a >= b;
    return result;
}

function lessOrEquals(a, b) {
    const result = a <= b;
    return result;
}

const lessOrEqualsFunction = function (a, b) {
    const result = a <= b;
    return result;
}

const arrowLessOrEquals = (a, b) => {
    const result = a <= b;
    return result;
}

function equals(a, b) {
    const result = a === b;
    return result;
}

const equalsFunction = function (a, b) {
    const result = a === b;
    return result;
}

const arrowEquals = (a, b) => {
    const result = a === b;
    return result;
}

function notEquals(a, b) {
    const result = a !== b;
    return result;
}

const notEqualsFunction = function (a, b) {
    const result = a !== b;
    return result;
}

const arrowNotEquals = (a, b) => {
    const result = a !== b;
    return result;
}

console.log('Вызов функции сложения:');
console.log(addition(5, 3));
console.log('Вызов функции вычитания:');
console.log(subtractionFunction(5, 3));
console.log('Вызов функции умножения:');
console.log(arrowMultiplication(5, 3));
console.log('Вызов функции деления:');
console.log(divisionFunction(5, 3));
console.log('Вызов функции остатка:');
console.log(remainder(5, 3));
console.log('Вызов функций сравнения:');
console.log(more(5, 3));
console.log(arrowLess(5, 3));
console.log(moreOrEqualsFunction(5, 3));
console.log(arrowLessOrEquals(5, 3));
console.log(equalsFunction(5, 3));
console.log(arrowNotEquals(5, 3));
