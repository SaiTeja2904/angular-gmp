export function daysdifference(date1, date2) {
    const ONEDAY = 1000 * 60 * 60 * 24;
    const date1_ms = date1.getTime();
    const date2_ms = date2.getTime();
    const difference_ms = Math.abs(date1_ms - date2_ms);

    return Math.round(difference_ms / ONEDAY);
}

export function timeConvert(mins) {
    const hours = mins / 60;
    const remaininghours = Math.floor(hours);
    const minutes = (hours - remaininghours) * 60;
    const remainingminutes = Math.round(minutes);
    return remaininghours + " h " + remainingminutes + " mins";
}
