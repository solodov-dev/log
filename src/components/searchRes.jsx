import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/searchRes.module.scss';

export default function SearchRes({ node, setQuery }) {
  return (
    <div className={styles.searchRes}>
      <Link to={node.slug}>
        <h3>{node.title}</h3>
      </Link>
      <ul className={styles.tags}>
        {node.tags.map((tag) => (
          <li key={tag} onClick={() => setQuery(tag)}>
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
