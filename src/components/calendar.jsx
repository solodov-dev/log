import React from 'react';
import styles from '../styles/calendar.module.scss';
import daysInYear from '../helpers/daysInYear';
import dayOfYear from '../helpers/dayOfYear';
import { Link } from 'gatsby';

export default function Calendar({ year, notes }) {
  const days = Array(daysInYear(year)).fill(0);

  const offset = Array(new Date(year, 0, 1).getDay() - 1).fill(null);

  notes.forEach(
    (note) => (days[dayOfYear(new Date(note.node.frontmatter.date)) - 1] = note)
  );

  console.log(days);
  return (
    <div className={styles.calendar}>
      {offset.map((_, i) => (
        <div key={i} />
      ))}
      {days.map((day, i) =>
        day ? (
          <Link to={day.node.fields.slug} key={i} className={styles.note} />
        ) : (
          <div className={styles.day} key={i} />
        )
      )}
    </div>
  );
}
