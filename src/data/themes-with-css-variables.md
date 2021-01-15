---
date: '2021-01-12'
title: Set theme with global css variables
tags: [css, theme, style]
---

Here’s a CSS variable (formally called a “CSS custom property“):

```css
:root {
  --mouse-x: 0px;
  --mouse-y: 0px;
}
```

Perhaps you use them to set a position:

```css
.mover {
  left: var(--mouse-x);
  top: var(--mouse-y);
}
```

To update those values from JavaScript, you’d:

```css
let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});
```
