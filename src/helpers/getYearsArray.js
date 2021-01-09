export default (startYear, thisYear) => {
  if (thisYear === startYear) {
    return [startYear];
  } else {
    const years = [];
    for (let year = startYear; year <= thisYear; year++) {
      years.push(year);
    }
    return years;
  }
};
