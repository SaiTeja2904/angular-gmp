export function daysdifference(date1, date2) {
    var ONEDAY = 1000 * 60 * 60 * 24;
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = Math.abs(date1_ms - date2_ms);

    return Math.round(difference_ms / ONEDAY);
}

export function timeConvert(mins) {
    var hours = mins / 60;
    var remaininghours = Math.floor(hours);
    var minutes = (hours - remaininghours) * 60;
    var remainingminutes = Math.round(minutes);
    return remaininghours + " h " + remainingminutes + " mins";
}
