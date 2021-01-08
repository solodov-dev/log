import React from 'react';
import { graphql, Link } from 'gatsby';

export default function App({ data }) {
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {/* {data.allMarkdownRemark.edges.map(({ node }) => ( */}
      {/*   <div key={node.id}> */}
      {/*     <span>{new Date(node.frontmatter.date).toLocaleDateString()}</span> */}
      {/*     <Link to={node.fields.slug}> */}
      {/*       <h3>{node.frontmatter.title}</h3> */}
      {/*     </Link> */}
      {/*     <span> */}
      {/*       tags: {node.frontmatter.tags && node.frontmatter.tags.join(', ')} */}
      {/*     </span> */}
      {/*   </div> */}
      {/* ))} */}
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
