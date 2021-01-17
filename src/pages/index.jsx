import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layouts/layout';
import Content from '../layouts/content';

export default function Home({ data }) {
  const { links } = data.site.siteMetadata;
  return (
    <Layout>
      <h1>Hi! My name is Andrey</h1>
      <Content>
        <p>
          I am a frontend web developer. This website is my personal{' '}
          <Link to="/log">log</Link>. My online digital notebook, where I record
          different things that I learn during my daily work as a developer.
          Also, I like solving problems on websites like{' '}
          <a href={links.leetcode}>leetcode</a> and{' '}
          <a href={links.hackerrank}>hackerrank</a>. You can find some of my
          solutions in my <Link to="/log">log</Link> too.
        </p>
        <p>
          This website is NOT a portfolio. You can find my code, which is not
          restricted by NDA, on my public <a href={links.github}>github</a>{' '}
          account.
        </p>
        <p>
          If you want to contact me directly, send me a{' '}
          <a href={links.telegram}>message</a> or an{' '}
          <a href={links.email}>email</a>.
        </p>
        <p>
          PS. I love reading, and you can follow my reading list or send me a
          book suggestion on <a href={links.goodreads}>goodreads</a>.
        </p>
      </Content>
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
          email
        }
      }
    }
  }
`;
