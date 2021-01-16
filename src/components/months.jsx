import React from 'react';
import styles from '../styles/months.module.scss';

export default function Months() {
  const months = new Array(12).fill(0).map((_, i) => {
    return new Date(`${i + 1}/1`).toLocaleDateString(undefined, {
      month: 'short',
    });
  });

  months.push('');

  return (
    <div className={styles.months}>
      {months.map((m, i) => (
        <span key={i}>{m}</span>
      ))}
    </div>
  );
}
