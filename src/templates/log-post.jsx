import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layouts/layout.jsx';
import styles from '../styles/log-post.module.scss';
import Content from '../layouts/content.jsx';

export default function LogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className={styles.post}>
        <h1>
          <Link to="/log">&#8601;</Link>
          {post.frontmatter.title}
        </h1>
        <Content>
          <div className={styles.subTitle}>
            <h3>
              {new Date(post.frontmatter.date).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
      </div>
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
