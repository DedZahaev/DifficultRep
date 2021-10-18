'use strict';

let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let date = new Date();
let weekday = date.getDay();
let options = {
    weekday: 'long'
};
let ourday = new Intl.DateTimeFormat('ru-RU', options).format(date);



const result = week.find(function (item, index, week) {
    if (ourday == item) {
        return index;
    }
})

for (let i = 0; i < week.length; i++) {

    if (result == week[i]) {
        document.writeln(week[i].bold() + "<br>");
        continue;
    } else if (week[i] == "суббота" || week[i] == "воскресенье" && week[i] != result) {
        document.writeln(week[i].italics() + "<br>");
        continue;
    }
    document.writeln(week[i] + "<br>");
}