import React from 'react';
import styles from '../styles/tags.module.scss';

export default function Tags({ tags, onClick }) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag, i) => (
        <li
          key={i}
          onClick={() => onClick(tag)}
          style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
          #{tag}
        </li>
      ))}
    </ul>
  );
}
