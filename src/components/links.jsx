import React from 'react';
import IconLink from './iconLink';
import styles from '../styles/links.module.scss';
import { graphql, useStaticQuery } from 'gatsby';

export default function Links({ links }) {
  const files = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `);

  return (
    <div className={styles.grid}>
      {files.allFile.edges.map((edge) => (
        <IconLink
          key={edge.node.id}
          text={edge.node.name}
          src={edge.node.publicURL}
          url={links[edge.node.name]}
        />
      ))}
    </div>
  );
}
