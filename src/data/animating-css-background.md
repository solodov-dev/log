---
date: '2021-01-15'
title: Animate gradient background with opacity
tags: [css, background, transition, animation, opacity]
---

You cannot animate the background property directly with css. Use opacity transition on pseudo element instead

```scss
&__btn {
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.198216) 11.5%,
      rgba(255, 255, 255, 4e-5) 79.18%
    );
    transition: opacity 0.3s ease-out;
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
    color: #f3f894;
  }
}
```
