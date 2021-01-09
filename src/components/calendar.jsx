import React from 'react';
import styles from '../styles/calendar.module.scss';
import daysInYear from '../helpers/daysInYear';

export default function Calendar({ year, notes }) {
  const days = new Array(daysInYear(year)).fill('');
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
