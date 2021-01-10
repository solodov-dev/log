import React from 'react';
import styles from '../styles/iconLink.module.scss';

export default function IconLink({ src, url, text }) {
  return (
    <div className={styles.container}>
      <a href={url} className={styles.icon} target="_blank" rel="noreferrer">
        <img src={src} alt={text} />
      </a>
      <span>{text}</span>
    </div>
  );
}
