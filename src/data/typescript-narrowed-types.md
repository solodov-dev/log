---
title: Typescript narrowed types
date: aug 19, 2020
tags: [typescript, types]
---

Some functions are able to use type guards to perform type narrowing across arrays or objects. If you do some lookups in an array, for instance, you may wind up with an array of nullable types:

```tsx
const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
const members = ['Janet', 'Michael'].map((who) =>
  jackson5.find((n) => n === who)
);
// Type is (string | undefined)[]
```

If you filter out the undefined values using filter , TypeScript isn’t able to follow along:

```tsx
const members = ['Janet', 'Michael']
  .map((who) => jackson5.find((n) => n === who))
  .filter((who) => who !== undefined);
// Type is (string | undefined)[]
```

But if you use a type guard, it can:

```tsx
function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const members = ['Janet', 'Michael']
  .map((who) => jackson5.find((n) => n === who))
  .filter(isDefined);
// Type is string[]
```

If you filter out the undefined values using filter , TypeScript isn’t able intuition for how narrowing works. Understanding how types in TypeScript narrow will help you build an intuition for how type inference works, make sense of errors, and generally have a more productive relationship with the type checker.
