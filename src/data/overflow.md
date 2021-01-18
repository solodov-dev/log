---
title: Overflow
date: jul 15, 2020
tags: [css, flexbox, layout]
---

Setting one axis to `overflow: visible` while setting the other axis to a different value results in visible behaving as auto.

```css
.box {
  overflowX: visible;
  /* overflowY: auto; */
}
```
