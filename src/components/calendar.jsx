import React from 'react';
import styles from '../styles/calendar.module.scss';
import daysInYear from '../helpers/daysInYear';
import dayOfYear from '../helpers/dayOfYear';
// import { Link } from 'gatsby';

export default function Calendar({ year, notes }) {
  const days = Array(daysInYear(year))
    .fill(0)
    .map(() => Array(0));

  const offset = Array(new Date(year, 0, 1).getDay() - 1).fill(null);

  notes.forEach((note) =>
    days[dayOfYear(new Date(note.node.frontmatter.date)) - 1].push(note)
  );

  return (
    <div className={styles.calendar}>
      {offset.map((_, i) => (
        <div key={i} />
      ))}
      {days.map((day, i) => (
        <div
          key={i}
          className={day.length ? styles.note : styles.day}
          title={JSON.stringify(day)}
          // style={{ animationDelay: `${i / 200}s` }}
        />
      ))}
    </div>
  );
}
