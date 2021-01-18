---
title: Arrow functions return
date: nov 18, 2020
tags: [js, function]
---

With single-line arrow functions the 'return' keyword is implicit so you don't need to type it out. However, on a multi-line arrow function you need to explicitly return a value.

```js
arr.map((x) => x + 2);

arr.map((x) => {
  console.log('Adding');
  return x + 2;
});
```
