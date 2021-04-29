---
date: '2021-04-29'
title: Table sticky header
tags: [css, table, borders]
---

Setting table headers to sticky position, borders scroll away. The optimal solution is:

```css
.table {
  border-collapse: separate;
  border-spacing: 0;
}
```
