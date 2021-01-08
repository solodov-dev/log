import React, { useState } from 'react';
import Calendar from '../components/calendar';
import SelectYear from '../components/selectYear';
import { graphql } from 'gatsby';

export default function Log({ data }) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);
  const years = getYearsArray(data.site.siteMetadata.startYear, thisYear);

  return (
    <div>
      <SelectYear years={years} setYear={setYear} />
      <Calendar year={year} />
    </div>
  );
}

const getYearsArray = (startYear, thisYear) => {
  if (thisYear === startYear) {
    return startYear;
  } else {
    const years = [];
    for (let year = startYear; year <= thisYear; year++) {
      years.push(year);
    }
    return years;
  }
};

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
