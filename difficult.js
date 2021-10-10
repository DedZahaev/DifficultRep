'use strict';



// Задание номер 2 усложненное часть первая

let numbers = ['23', '41', '123', '57', '2999', '100', '444'];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i][0] == 2 || numbers[i][0] == 4) {
        console.log(numbers[i]);
    }
}

// Задание номер 2 усложненное часть вторая
for (let j = 1; j < 100; j++) {
    if (j == 1) {
        continue;
    } else if (j % 2 != 0 && j % 3 != 0 && j % 5 != 0) {
        console.log(j + " " + "Делители этого числа: 1 и " + j);
    } else if (j == 2) {
        console.log(j + " " + "Делители этого числа: 1 и " + j);
    } else if (j == 3) {
        console.log(j + " " + "Делители этого числа: 1 и " + j);
    } else if (j == 5) {
        console.log(j + " " + "Делители этого числа: 1 и " + j);
    }
}