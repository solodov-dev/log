---
title: Tsdoc
date: sep 16, 2020
tags: [typescript]
---

```tsx
// With functions

/**
 * Generate a greeting.
 * @param name Name of the person to greet
 * @param salutation The person's title
 * @returns A greeting formatted for human consumption.
 */
function greetFullTSDoc(name: string, title: string) {
  return `Hello ${title} ${name} `;
}

// With types

/** A measurement performed at a time and place. */
interface Measurement {
  /** Where was the measurement made? */
  position: Vector3D;

  /** When was the measurement made? In seconds since epoch. */
  time: number;

  /** Observed momentum */
  momentum: Vector3D;
}
```
