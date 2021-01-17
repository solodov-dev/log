import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/searchRes.module.scss';
import Tags from './tags';

export default function SearchRes({ res, setQuery }) {
  return (
    <ul className={styles.list}>
      {res.map((node, i) => (
        <li>
          <div key={i} className={styles.searchRes}>
            <Link to={node.slug}>
              <h3>{node.title}</h3>
            </Link>
            <Tags tags={node.tags} onClick={setQuery} />
          </div>
        </li>
      ))}
    </ul>
  );
}
