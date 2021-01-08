import React from 'react';
import styles from '../styles/selectYear.module.scss';

export default function SelectYear({ years, setYear }) {
  return (
    <ul className={styles.menu}>
      {years.map((year) => (
        <li key={year} onClick={() => setYear(year)}>
          {year}
        </li>
      ))}
    </ul>
  );
}
