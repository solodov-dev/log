---
title: iterating over objects in typescript
date: sep 14, 2020
tags: [typescript]
---

```tsx
// If you know what the keys are
let k: keyof typeof obj; // Type is "one" | "two" | "three"

for (k in obj) {
  const v = obj[k]; // OK
}

// To iterate over any object
function foo(abc: ABC) {
  for (const [k, v] of Object.entries(abc)) {
    k; // Type is string
    v; // Type is any
  }
}
```
