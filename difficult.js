'use strict';

let lang = prompt("На каком языке укажите ru или en");
if (lang == "ru") {
    lang = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    for (let i = 0; i < lang.length; i++) {
        console.log(lang[i]);

    }
} else if (lang == "en") {
    lang = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (let i = 0; i < lang.length; i++) {
        console.log(lang[i]);

    }
}

switch (lang) {
    case "ru":
        lang = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        for (let i = 0; i < lang.length; i++) {
            console.log(lang[i]);
        }
        break
    case "en":
        lang = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        for (let i = 0; i < lang.length; i++) {
            console.log(lang[i]);
        }
        break

}
let arr1 = [

    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
];


lang == "ru" ? console.log(arr1[0][0], arr1[0][1], arr1[0][2], arr1[0][3], arr1[0][4], arr1[0][5], arr1[0][6]) :
    console.log(arr1[1][0], arr1[1][1], arr1[1][2], arr1[1][3], arr1[1][4], arr1[1][5], arr1[1][6]);


let namePerson = prompt("Ввести Артем или Александр");

namePerson == "Артем" ? console.log("директор") :
    namePerson == "Александр" ? console.log("преподаватель") :
    console.log("студент");