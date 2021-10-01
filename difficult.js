let num = 266219;
let a;
let sum = 1;
console.log(num);

while (num > 0) {
    sum = sum * (num % 10);


    num = Math.floor(num / 10);

}

sum = sum ** 3;

while (sum > 0) {
    sum = Math.floor(sum / 10);
    if (sum == 21) {
        console.log(sum + " " + "первые две цифры");
        a = sum % 10;
        console.log(a + " " + "вторая цифра");
        sum = Math.floor(sum / 10);
        sum = sum;
        console.log(sum + " " + "первая цифра");
    }


}