import React, { useState, useEffect } from 'react';
import Calendar from '../components/calendar';
import Navigation from '../components/navigation';
import { graphql } from 'gatsby';
import getYearsArray from '../helpers/getYearsArray';
import Layout from '../layouts/layout.jsx';
import SearchRes from '../components/searchRes';
import { Index } from 'elasticlunr';

export default function Log({ data }) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);
  const years = getYearsArray(data.site.siteMetadata.startYear, thisYear);

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
      <Navigation
        activeYear={year}
        years={years}
        setYear={setYear}
        setQuery={setQuery}
        query={query}
      />
      {searchResults.length ? (
        <SearchRes res={searchResults} setQuery={setQuery} />
      ) : (
        <Calendar
          year={year}
          notes={data.allMarkdownRemark.edges.filter(
            (edge) =>
              new Date(edge.node.frontmatter.date).getFullYear() === year
          )}
        />
      )}
    </Layout>
  );
}

export const query = graphql`
  query {
    siteSearchIndex {
      index
    }
    site {
      siteMetadata {
        startYear
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
