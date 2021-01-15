import React from 'react';
import { graphql, Link } from 'gatsby';
import Links from '../components/links';
import styles from '../styles/index.module.scss';
import Layout from '../layouts/layout';

export default function Home({ data }) {
  const { links } = data.site.siteMetadata;
  return (
    <Layout>
      <h1>Hi! My name is Andrey</h1>
      <div className={styles.text}>
        <p>
          I am a frontend web developer. This website is my personal{' '}
          <Link to="/log">log</Link>. My online digital notebook, where I record
          all things that I learn during my daily work as a developer. Also, I
          like solving problems on websites like{' '}
          <a href={links.leetcode}>leetcode</a> and{' '}
          <a href={links.hackerrank}>hackerrank</a>. You can find some of my
          solutions in my <Link to="/log">log</Link> too.
        </p>
        <p>
          This website is NOT a portfolio. You can find my code, which is not
          restricted by NDA, on my public <a href={links.github}>github</a>{' '}
          account.
        </p>
      </div>
      <footer>
        <Links links={links} />
      </footer>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        links {
          github
          leetcode
          hackerrank
          telegram
          linkedin
          goodreads
          cv
          email
        }
      }
    }
  }
`;
