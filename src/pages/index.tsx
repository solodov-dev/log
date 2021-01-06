import React from 'react';
import { graphql } from 'gatsby';

export default function App(props: { data: any }): JSX.Element {
  return (
    <div>
      <h1>About {props.data.site.siteMetadata.title}</h1>
      <div>My log site</div>
    </div>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
