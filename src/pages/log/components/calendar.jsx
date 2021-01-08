import React from 'react';
import styles from '../../../styles/calendar.module.scss';

export default function Calendar({ year }) {
  const days = new Array(daysInYear(year)).fill('x');
  const offset = new Date(year, 0, 1).getDay() - 1;

  return (
    <div className={styles.calendar}>
      {new Array(offset).fill('').map((_, i) => (
        <div key={i} />
      ))}
      {days.map((day) => (
        <div key={day} className={styles.day} />
      ))}
    </div>
  );
}

const daysInYear = (year) => {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return 366;
  }
  return 365;
};
