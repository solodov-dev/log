---
title: shape-outside...
date: jul 16, 2020
tags: [css, sass]
---

- Surrounding image with text using [css property](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside#:~:text=The) `shape-outside`
- To extend classes with SASS write media queries as usual:

```scss
// styles.scss

.formHeader {
  background-color: $darkgreen;
  padding: 32px;
  background-position: right 50px bottom;
  background-repeat: no-repeat;
}

@media screen and (max-width: 820px) {
  .formHeader {
    background-image: none !important;
    padding: 16px;
  }
}

// ReviewsHeader.module.scss

@import './src/styles/styles.scss';

.header {
  @extend .formHeader;
}
```
