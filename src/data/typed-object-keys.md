---
title: Typed object keys
date: '2021-06-18'
tags: [enum, typescript, helpers, objects, loop, map]
---

If you are tired of writing `key as keyof typeof`:

```ts
export default function objectKeys<T>(obj: T): Array<keyof T> {
  const keys = Object.keys(obj);
  return keys as Array<keyof T>;
}
```
