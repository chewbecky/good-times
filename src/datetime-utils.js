const Weekdays = [
    "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"
];

export function createDateAndTime(randFactor, index) {
  return new Date(Date.now() - index * randFactor).toLocaleString();
}

export function createDateAndTimeISO(randFactor, index) {
  return new Date(Date.now() - index * randFactor).toISOString();
}

export function createDateAndTimeUTC(randFactor, index) {
  return new Date(Date.now() - index * randFactor).toUTCString();
}

export function createTime(randFactor, index) {
  return new Date(Date.now() - index * randFactor)
    .toLocaleTimeString()
    .slice(0, -3);
}

export function createTimeWithSeconds(randFactor, index) {
  return new Date(Date.now() - index * randFactor).toLocaleTimeString();
}

export function createSeconds(randFactor, index) {
  let data = new Date(Date.now() - index * randFactor);
  return data.getMinutes();
}

export function createHours(randFactor, index) {
  let data = new Date(Date.now() - index * randFactor);
  return data.getHours();
}

export function createWeekdays(randFactor, index) {
  let data = new Date(Date.now() + index * randFactor).getDay();
  console.log(data, Weekdays[data]);
  return Weekdays[data]+ "  " + index;
}