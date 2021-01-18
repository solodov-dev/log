---
title: Accessing index in for of loop in javascript
date: dec 11, 2020
tags: [js, array, loop]
---

To access the index in 'for of' loop in javascript use array destructuring and `Array.entries()` method.

```js
for (const [index, value] of [1, 2, 3, 4, 5].entries()) {
  console.log(index, value);
}
```
