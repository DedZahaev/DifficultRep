'use strict';
// Вывести дату в двух форматах 
// Первый формат  задание (a)
let date = new Date(2020, 1, 4, 21, 5, 33);
const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
]

const monthIndex = date.getMonth();
const monthName = months[monthIndex];
const yearName = date.getFullYear();
const dayIndex = date.getDay();
const dayName = days[dayIndex];
const hourName = date.getHours();
const minuteName = date.getMinutes();
const secondsName = date.getSeconds();
const dateName = date.getDate();
let declination;

function addDeclination(a) {

    if (a == 1 || a == 21) {
        return declination = "час";
    } else if (a > 1 && a < 5 || a > 21) {
        return declination = "часа";
    } else if (a > 4 && a < 21) {
        return declination = "часов";
    }
}

document.write('Сегодня' + " " + dayName + ", " + dateName + " " + monthName + " " + yearName + " года, " + hourName + " " + addDeclination(date.getHours()) + " " + minuteName + " минут " + secondsName + " секунды ");




console.log(monthIndex);
console.log(monthName);
console.log(yearName);
console.log(dayIndex);
console.log(dayName);
console.log(minuteName);
console.log(secondsName);
console.log(dateName);


// Задание (б)
function addLeadingZero(d) {
    return (d < 10) ? '0' + d : d;
}

let year = date.getFullYear();
let month2 = addLeadingZero(date.getMonth() + 1);
let dateofDate = addLeadingZero(date.getDate());
let hour = date.getHours();
let minutes = addLeadingZero(date.getMinutes());
let sec = date.getSeconds();



document.write("   |   " + dateofDate + "." + month2 + "." + year + " - " + hour + ":" + minutes + ":" + sec);

console.log(year);
console.log(month2);
console.log(dateofDate);
console.log(hour);
console.log(minutes);
console.log(sec);

// Обновление дат и времени 
function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.write("   " + time);
}

displayTime();
const createClock = setInterval(displayTime, 1000);