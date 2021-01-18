---
title: Set interval with react hooks
date: oct 20, 2020
tags: [hooks, jsx, react]
---

```ts
useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will run every second!');
  }, 1000);
  return () => clearInterval(interval);
}, []);
```
