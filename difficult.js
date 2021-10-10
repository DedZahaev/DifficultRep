'use strict';

// Задание номер 1 усложненное

const isNumber = function (num) {
    while (num === null) {
        return 0;
    }
    while (!isNaN(parseFloat(num)) && isFinite(num)) {
        return Number(num);
    }
}

let sum = prompt("Напишите сюда числовое значение!");

const asking = function () {
    while (!isNumber(sum)) {
        if (isNumber(sum) === 0) {
            break;
        }

        sum = prompt("Напишите сюда числовое значение!");
    }
}
asking();

let number = isNumber(sum);
console.log(number);