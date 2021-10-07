'use strict';

const changetext = function (per) {
    if (typeof per != "string") {
        alert("в качестве аргумента передана не строка");
    }
    per = per.trim();
    if (per.length > 30) {
        per = per.slice(0, 30) + '...';
        console.log(per);
    }


}