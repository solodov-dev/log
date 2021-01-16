import React from 'react';
import styles from '../styles/navigation.module.scss';
import { Link } from 'gatsby';

export default function Navigation({ years, activeYear, setYear }) {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/">
          <h1>home</h1>
        </Link>
      </li>
      {years.map((year) => (
        <li
          key={year}
          onClick={() => setYear(year)}
          style={{ textDecoration: year === activeYear ? 'underline' : 'none' }}
        >
          <h1>{year}</h1>
        </li>
      ))}
    </ul>
  );
}
