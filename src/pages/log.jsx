import React, { useState } from 'react';
import Calendar from '../components/calendar';
import Navigation from '../components/navigation';
import { graphql } from 'gatsby';
import getYearsArray from '../helpers/getYearsArray';

export default function Log({ data }) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);
  const years = getYearsArray(data.site.siteMetadata.startYear, thisYear);

  return (
    <div>
      <Navigation activeYear={year} years={years} setYear={setYear} />
      <Calendar
        year={year}
        notes={data.allMarkdownRemark.edges.filter(
          (edge) => new Date(edge.node.frontmatter.date).getFullYear() === year
        )}
      />
    </div>
  );
}

export const query = graphql`
  query {
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
