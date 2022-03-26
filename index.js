function addition(a, b) {
    return a + b;
}

const additionFunction = function (a, b) {
    return a + b;
};

const arrowAddition = (a, b) => a + b;

function subtraction(a, b) {
    return a - b;
}

const subtractionFunction = function (a, b) {
    return a - b;
};

const arrowSubtraction = (a, b) => a - b;

function multiplication(a, b) {
    return a * b;
}

const multiplicationFunction = function (a, b) {
    return a * b;
};

const arrowMultiplication = (a, b) => a * b;

function division(a, b) {
    return a / b;
}

const divisionFunction = function (a, b) {
    return a / b;
};

const arrowDivision = (a, b) => a / b;

function remainder(a, b) {
    return a % b;
}

const remainderFunction = function (a, b) {
    return a % b;
};

const arrowRemainder = (a, b) => a % b;

function more(a, b) {
    return a > b;
}

const moreFunction = function (a, b) {
    return a > b;
};

const arrowMore = (a, b) => a > b;

function less(a, b) {
    return a < b;
}

const lessFunction = function (a, b) {
    return a < b;
};

const arrowLess = (a, b) => a < b;

function moreOrEquals(a, b) {
    return a >= b;
}

const moreOrEqualsFunction = function (a, b) {
    return a >= b;
};

const arrowMoreOrEquals = (a, b) => a >= b;

function lessOrEquals(a, b) {
    return a <= b;
}

const lessOrEqualsFunction = function (a, b) {
    return a <= b;
};

const arrowLessOrEquals = (a, b) => a <= b;

function equals(a, b) {
    return a === b;
}

const equalsFunction = function (a, b) {
    return a === b;
};

const arrowEquals = (a, b) => a === b;

function notEquals(a, b) {
    return a !== b;
}

const notEqualsFunction = function (a, b) {
    return a !== b;
};

const arrowNotEquals = (a, b) => a !== b;

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
