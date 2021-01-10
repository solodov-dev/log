module.exports = {
  siteMetadata: {
    startYear: 2020,
    links: {
      github: 'https://www.github.com/solodov-dev',
      leetcode: 'https://www.leetcode.com/solodov-dev/',
      hackerrank: 'https://www.hackerrank.com/solodov_dev',
      telegram: 'https://www.t.me/solodov_dev',
      linkedin: 'https://www.linkedin.com/in/solodov-dev/',
      goodreads: 'https://www.goodreads.com/solodov',
      email: 'mailto:solodov.dev@gmail.com?subject=Mail from sldv.link',
      cv: '/cv/',
    },
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        cwd: process.cwd(), // path to a directory that should be considered as the current working directory
        watch: true, // format/lint on save
        initialScan: true, // if true, will format/lint the whole project on Gatsby startup
        onChangeFullScanLint: false, // if true, on file save always perform full scan lint
        onChangeFullScanFormat: false, // if true, on file save always perform full scan format
        prettierLast: false, // if true, will run Prettier after ESLint
        ignorePatterns: [
          '**/node_modules/**/*',
          '**/.git/**/*',
          '**/dist/**/*',
          '.cache/**/*',
          'public/**/*',
        ], // string or array of paths/files/globs to ignore
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
  ],
};
