import React from 'react';
import styles from '../styles/layout.module.scss';

export default function Layout({ children }) {
  return <main className={styles.layout}>{children}</main>;
}
