'use strict';

// let lang = prompt("На каком языке укажите ru или en");
// if (lang == "ru") {
//     lang = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//     for (let i = 0; i < lang.length; i++) {
//         console.log(lang[i]);

//     }
// } else if (lang == "en") {
//     lang = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     for (let i = 0; i < lang.length; i++) {
//         console.log(lang[i]);

//     }
// }

// switch (lang) {
//     case "ru":
//         lang = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//         for (let i = 0; i < lang.length; i++) {
//             console.log(lang[i]);
//         }
//         break
//     case "en":
//         lang = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//         for (let i = 0; i < lang.length; i++) {
//             console.log(lang[i]);
//         }
//         break

// }
// let arr1 = {
//     en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// };
// let arr2 = {
//     ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

// };
// lang == "ru" ? console.log(arr2) : console.log(arr1);


let namePerson = prompt("Ввести Артем или Александр");

namePerson == "Артем" ? console.log("директор") :
    namePerson == "Александр" ? console.log("преподаватель") :
    console.log("студент");