/**
 * @fileOverview
 * @name index.js
 * @author AdonRain
 * @license MIT
 */

'use strict';

module.exports = function(year) {
    var startDate = new Date(year, 0);
    var endDate = new Date(year / 1 + 1, 0);
    var tempDate = startDate;
    var weeks = [];

    while (tempDate < endDate) {
        if (tempDate.getDay() === 1) {
            var week = {};
            week.start = date2json(tempDate);
            tempDate.setDate(tempDate.getDate() + 6);
            week.end = date2json(tempDate);
            weeks.push(week);
        }
        tempDate.setDate(tempDate.getDate() + 1);
    }

    return weeks;
};

function date2json(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
    };
}
