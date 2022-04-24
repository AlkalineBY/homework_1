const min = (a, b) => {
    if (a > b) {
        console.log(b);
    } else {
        console.log(a);
    }
};

const minTer = (a, b) => {
    a > b ? console.log(b) : console.log(a);
}

min(2, 1);
minTer(3, 5);

// function pow(x, n) {
//     const x = prompt("Введите значение x:");
//     const n = prompt("Введите значение n:");
//     return x ** n;
// }
// alert(pow);