import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import SearchRes from '../components/searchRes';
import Layout from '../layouts/layout';
import { Index } from 'elasticlunr';
import styles from '../styles/search.module.scss';

export default function Search({ data }) {
  const [index, setIndex] = useState(Index.load(data.siteSearchIndex.index));
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!index) setIndex(Index.load(data.siteSearchIndex.index));
    setSearchResults(
      index
        .search(query, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref))
    );
  }, [query]);

  return (
    <Layout>
      <input
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className={styles.search}
      />
      {searchResults.map((node) => (
        <SearchRes node={node} key={node.id} setQuery={setQuery} />
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    siteSearchIndex {
      index
    }
  }
`;
