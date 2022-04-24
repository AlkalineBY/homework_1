const number = (a) => {
    if (a % 2) {
        console.log('Число ' + a + ' нечётное.')
    } else {
        console.log('Число ' + a + ' чётное.')
    }
};

const minNumberWhile = (b, n) => {
    let currentNumber = 1;

    console.log('Цикл с конструкцией "while" (меньшее число):');

    if (b >= n) {
        while (currentNumber <= n) {
            console.log(currentNumber);
            currentNumber += 1;
        }
    } else {
        while (currentNumber <= b) {
            console.log(currentNumber);
            currentNumber += 1;
        }
    }
};

const minNumberDo = (b, n) => {
    let currentNumber = 1;

    console.log('Цикл с конструкцией "do...while" (меньшее число):');

    if (b >= n) {
        do {
            console.log(currentNumber);
            currentNumber += 1;
        } while (currentNumber <= n);
    } else {
        do {
            console.log(currentNumber);
            currentNumber += 1;
        } while (currentNumber <= b);
    }
};

const minNumberFor = (b, n) => {
    console.log('Цикл с конструкцией "for" (меньшее число):');

    if (b >= n) {
        for (let currentNumber = 1; currentNumber <= n; currentNumber += 1) {
            console.log(currentNumber);
        }
    } else {
        for (let currentNumber = 1; currentNumber <= b; currentNumber += 1) {
            console.log(currentNumber);
        }
    }
};

const maxNumberWhile = (b, n) => {
    const maxNumber = b >= n ? b : n;
    let currentNumber = 1;

    console.log('Цикл с конструкцией "while" (большее число):');

    while (currentNumber <= maxNumber) {
        console.log(currentNumber);
        currentNumber += 1;
    }
};

const maxNumberDo = (b, n) => {
    const maxNumber = b >= n ? b : n;
    let currentNumber = 1;

    console.log('Цикл с конструкцией "do...while" (большее число):');

    do {
        console.log(currentNumber);
        currentNumber += 1;
    } while (currentNumber <= maxNumber);
};

const maxNumberFor = (b, n) => {
    const maxNumber = b >= n ? b : n;

    console.log('Цикл с конструкцией "for" (большее число):');

    for (let currentNumber = 1; currentNumber <= maxNumber; currentNumber += 1) {
        console.log(currentNumber);
    }
};

const multiNumberWhile = (N, M) => {
    let currentNumber = 1;

    console.log('Цикл с конструкцией "while" (произведение):');

    while (currentNumber <= N) {
        console.log(currentNumber);
        let result = currentNumber * M;
        if (result % 2) {
            console.log('Произведение чисел: ' + currentNumber + ' * ' + M + ' = ' + result + ' (нечётное)');
        }
        currentNumber += 1;
    }
};

const multiNumberDo = (N, M) => {
    let currentNumber = 1;

    console.log('Цикл с конструкцией "do...while" (произведение):');

    do {
        console.log(currentNumber);
        let result = currentNumber * M;
        if (result % 2) {
            console.log('Произведение чисел: ' + currentNumber + ' * ' + M + ' = ' + result + ' (нечётное)');
        }
        currentNumber += 1;
    }
    while (currentNumber <= N);
};

const multiNumberFor = (N, M) => {
    console.log('Цикл с конструкцией "for" (произведение):');

    for (let currentNumber = 1; currentNumber <= N; currentNumber += 1) {
        console.log(currentNumber);
        let result = currentNumber * M;
        if (result % 2) {
            console.log('Произведение чисел: ' + currentNumber + ' * ' + M + ' = ' + result + ' (нечётное)');
        }
    }
};

number(4);
minNumberWhile(7, 5);
minNumberDo(2, 5);
minNumberFor(6, 7);
maxNumberWhile(7, 3);
maxNumberDo(5, 7);
maxNumberFor(2, 3);
multiNumberWhile(7, 3);
multiNumberDo(5, 3);
multiNumberFor(6, 7);
