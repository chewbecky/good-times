const weekdaysDeLong = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag"
];
const weekdaysDeShort = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const monthsDeLong = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];
const monthsDeShort = [
  "Jan",
  "Feb",
  "März",
  "April",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez"
];
const weekdaysEnLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const weekdaysEnShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const monthsEnLong = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const monthsEnShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const timesInMilSec = {
  second: 1000,
  minute: 60000,
  hour: 360000,
  day: 86400000,
  week: 604800000
};

const todayMS = new Date(Date.now());
const todayDate = todayMS.getDate();
const today = todayMS.getDay();

/*************************************/
// Random Date and Time Functions
/*************************************/
export function createDateAndTime(index, randFactor) {
  return new Date(Date.now() - index * randFactor).toLocaleString();
}

export function createDateAndTimeISO(index, randFactor) {
  return new Date(Date.now() - index * randFactor).toISOString();
}

export function createDateAndTimeUTC(index, randFactor) {
  return new Date(Date.now() - index * randFactor).toUTCString();
}

export function createTime(index, randFactor) {
  return new Date(Date.now() - index * randFactor)
    .toLocaleTimeString()
    .slice(0, -3);
}

export function createTimeWithSeconds(index, randFactor) {
  return new Date(Date.now() - index * randFactor).toLocaleTimeString();
}

/*************************************/
// unused
/*************************************/

export function createSeconds(index, randFactor) {
  let data = new Date(Date.now() - index * randFactor);
  return data.getMinutes();
}

export function createHours(index, randFactor) {
  let data = new Date(Date.now() - index * randFactor);
  return data.getHours();
}

/*************************************/
// Kalender Functions
/*************************************/

export function createMonthsDElong(index) {
  return monthsDeLong[index%12];
}
export function createMonthsDEshort(index) {
  return monthsDeShort[index%12];
}
export function createWeekdaysDElong(index) {
  return weekdaysDeLong[index%7];
}
export function createWeekdaysDEshort(index) {
  return weekdaysDeShort[index%7];
}
export function createDays(index) {
  return new Date(Date.now() + (index-todayDate+1) * timesInMilSec.day).getUTCDate().toString();
}

export function createKalenderSheetWeek(index) {
  let day = new Date(Date.now() + (index-today) * timesInMilSec.day);
  let date = day.getUTCDate().toString();
  let weekday = day.getDay();
  return date + " " + weekdaysDeShort[weekday];
}

export function createKalenderSheetMonth(index) {
  let day = new Date(Date.now() + (index-today-todayDate+1) * timesInMilSec.day);
  let date = day.getUTCDate().toString();
  let weekday = day.getDay();
  return date + " " + weekdaysDeShort[weekday];
}


/*************************************/
// Calendar Functions
/*************************************/

export function createMonthsENlong(index) {
  return monthsEnLong[index%12];
}
export function createMonthsENshort(index) {
  return monthsEnShort[index%12];
}
export function createWeekdaysENlong(index) {
  return weekdaysEnLong[index%7];
}
export function createWeekdaysENshort(index) {
  return weekdaysEnShort[index%7];
}
export function createCalendarSheetWeek(index) {
  let day = new Date(Date.now() + (index-today) * timesInMilSec.day);
  let date = day.getUTCDate().toString();
  let weekday = day.getDay();
  return date + " " + weekdaysEnShort[weekday];
}

export function createCalendarSheetMonth(index) {
  let day = new Date(Date.now() + (index-today-todayDate+1) * timesInMilSec.day);
  let date = day.getUTCDate().toString();
  let weekday = day.getDay();
  return date + " " + weekdaysEnShort[weekday];
}