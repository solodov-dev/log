---
title: Typescript conditional types
date: sep 15, 2020
tags: [typescript]
---

```tsx
function double<T extends number | string>(
  x: T
): T extends string ? string : number;

function double(x: any) {
  return x + x;
}

const num = double(12); // number
const str = double('x'); // string
```
