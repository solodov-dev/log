---
title: Updating array in state
date: nov 3, 2020
tags: [hooks, react]
---

If you need to update an array, always give a new copy of an array!

```js
setState([...oldArray]);
```
