---
title: arrow functions return
date: nov 18, 2020
tags: [js]
---

With single-line arrow functions the 'return' keyword is implicit so you don't need to type it out. However, on a multi-line arrow function you need to explicitly return a value.

```tsx
arr.map((x) => x + 2);

arr.map((x) => {
  console.log('Adding');
  return x + 2;
});
```
