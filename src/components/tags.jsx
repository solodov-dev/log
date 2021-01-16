import React from 'react';
import styles from '../styles/tags.module.scss';

export default function Tags({ tags }) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag, i) => (
        <li key={i}>#{tag}</li>
      ))}
    </ul>
  );
}
