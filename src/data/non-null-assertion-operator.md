---
title: Non-null assertion operator
date: sep 11, 2020
tags: [typescript]
---

```ts
// ! operator removes null and undefined from the type

const div = document.getElementById('my-div')!;

// alternatively 

const div = document.getElementById('my-div') as HTMLDivElement;
```
