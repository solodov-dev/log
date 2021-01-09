import React from 'react';
import styles from '../styles/navigation.module.scss';
import { Link } from 'gatsby';

export default function Navigation({ years, activeYear, setYear }) {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/">home</Link>
      </li>
      {years.map((year) => (
        <li
          key={year}
          onClick={() => setYear(year)}
          style={{ textDecoration: year === activeYear ? 'underline' : 'none' }}
        >
          {year}
        </li>
      ))}
    </ul>
  );
}
