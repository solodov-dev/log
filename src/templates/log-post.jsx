import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout.jsx';
import Tags from '../components/tags.jsx';

export default function LogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <Tags tags={post.frontmatter.tags} />
      <h3>{post.frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
