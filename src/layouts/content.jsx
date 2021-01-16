import React from 'react';
import styles from '../styles/content.module.scss';

export default function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}
