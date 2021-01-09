import React from 'react';
import { graphql, Link } from 'gatsby';

export default function App({ data }) {
  const { links } = data.site.siteMetadata;
  return (
    <div>
      <h1>Hi! My name is Andrey</h1>
      <p>
        I am a frontend web developer. This website is my personal{' '}
        <Link to="/log">log</Link>. My online digital garden. Here I record all
        things that I learn during my daily work as a developer. Also, I like
        solving problems on websites like <a href={links.leetcode}>leetcode</a>{' '}
        and <a href={links.hackerrank}>hackerrank</a>. You can find some of my
        solutions in my <Link to="/log">log</Link> too.
      </p>
      <p>
        This website is NOT a portfolio. All my work, which is not restricted by
        NDA, you can find on my public <a href={links.github}>github</a>{' '}
        account.
      </p>
    </div>
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
        }
      }
    }
  }
`;
