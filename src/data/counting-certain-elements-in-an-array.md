---
title: counting certain elements in an array
date: dec 6, 2020
tags: [js]
---

```tsx
[...].reduce(
    (acc, cur) => (arr.every((el) => el.includes(cur)) ? acc + 1 : acc),
    0
  );

// or

[...word].filter(letter => arr.every(line => line.includes(letter)).length;
```
