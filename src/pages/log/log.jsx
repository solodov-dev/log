import React, { useState } from 'react';
import Calendar from './components/calendar';
import SelectYear from './components/selectYear';

export default function Log({ startYear }) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);
  const years = getYearsArray(startYear, thisYear);

  return (
    <div>
      <SelectYear years={years} setYear={setYear} />
      <Calendar year={year} />
    </div>
  );
}

const getYearsArray = (startYear, thisYear) => {
  if (thisYear === startYear) {
    return startYear;
  } else {
    const years = [];
    for (let year = startYear; year <= thisYear; year++) {
      years.push(year);
    }
    return years;
  }
};
