import React from 'react';
import styles from '../styles/navigation.module.scss';
import { Link } from 'gatsby';

export default function Navigation({
  years,
  activeYear,
  setYear,
  setQuery,
  query,
}) {
  const opaque = { opacity: query ? 0 : 1 };
  return (
    <ul className={styles.menu}>
      <li style={opaque}>
        <Link to="/" title="Home">
          <h1>&#8602;</h1>
        </Link>
      </li>
      {years.map((year) => (
        <li
          key={year}
          onClick={() => setYear(year)}
          className={year === activeYear && styles.active}
          style={opaque}
        >
          <h1>{year}</h1>
        </li>
      ))}
      <li className={styles.search}>
        <input
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
          className={styles.search}
          value={query}
        />
      </li>
    </ul>
  );
}
