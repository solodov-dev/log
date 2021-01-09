export default (year) => (leapYear(year) ? 366 : 355);

const leapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
