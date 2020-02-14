export function createDateAndTime(randFactor, index) {
  return new Date(Date.now() - index * randFactor * 1000).toLocaleString();
}

export function createDateAndTimeISO(randFactor, index) {
  return new Date(Date.now() - index * randFactor * 1000).toISOString();
}

export function createDateAndTimeUTC(randFactor, index) {
  return new Date(Date.now() - index * randFactor * 1000).toUTCString();
}

export function createTime(randFactor, index) {
  return new Date(
    Date.now() - index * randFactor * 1000
  ).toLocaleTimeString().slice(0, -3);
}

export function createTimeWithSeconds (randFactor, index) {
  return new Date(
      Date.now() - index * randFactor * 1000
  ).toLocaleTimeString();
}
