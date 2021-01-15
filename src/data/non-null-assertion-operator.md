---
title: non-null assertion operator
date: sep 11, 2020
tags: [typescript]
---

```tsx
// ! operator removes null and undefined from the type

const div = document.getElementById('my-div')!;

// or

const div = document.getElementById('my-div') as HTMLDivElement;
```
