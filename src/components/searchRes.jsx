import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/searchRes.module.scss';
import Tags from './tags';

export default function SearchRes({ node, setQuery }) {
  return (
    <div className={styles.searchRes}>
      <Link to={node.slug}>
        <h3>{node.title}</h3>
      </Link>
      <Tags tags={node.tags} onClick={setQuery} />
    </div>
  );
}
