export const formattedDate = timestamp => {
    const MILLIS_IN_SECOND = 1000;
    const SECONDS_IN_MINUTE = 60;
    const MINUTES_IN_HOUR = 60;
    const HOURS_IN_DAY = 24;
    const DAYS_IN_WEEK = 7;

    let milliElapsed = Date.now() - Date.parse(timestamp);

    let secondsElapsed = milliElapsed / MILLIS_IN_SECOND;
    if (secondsElapsed < SECONDS_IN_MINUTE) {
        let unit = Math.floor(secondsElapsed) === 1 ? "sec" : "secs";
        return `${Math.floor(secondsElapsed)} ${unit} ago`;
    }

    let minutesElapsed = secondsElapsed / SECONDS_IN_MINUTE;
    if (minutesElapsed < MINUTES_IN_HOUR) {
        let unit = Math.floor(minutesElapsed) === 1 ? "min" : "mins";
        return `${Math.floor(minutesElapsed)} ${unit} ago`;
    }

    let hoursElapsed = minutesElapsed / MINUTES_IN_HOUR;
    if (hoursElapsed < HOURS_IN_DAY) {
        let unit = Math.floor(hoursElapsed) === 1 ? "hour" : "hours";
        return `${Math.floor(hoursElapsed)} ${unit} ago`;
    }

    let daysElapsed = hoursElapsed / HOURS_IN_DAY;
    if (daysElapsed < DAYS_IN_WEEK) {
        let unit = Math.floor(daysElapsed) === 1 ? "day" : "days";
        return `${Math.floor(daysElapsed)} ${unit} ago`;
    }

    let weeksElapsed = daysElapsed / DAYS_IN_WEEK;
    let unit = Math.floor(weeksElapsed) === 1 ? "week" : "weeks";
    return `${Math.floor(weeksElapsed)} ${unit} ago`;
};