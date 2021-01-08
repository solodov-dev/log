---
title: extending built-in types
date: sep 14, 2020
tags: [typescript]
---

```tsx
// Simple solution
(document as any).monkey = 'Tamarin'; // OK

// But problematic
(document as any).monky = 'Tamarin'; // Also OK, misspelled
(document as any).monkey = /Tamarin/; // Also OK, wrong type

// Better solution
interface MonkeyDocument extends Document {
  /** Genus or species of monkey patch */
  monkey: string;
}

(document as MonkeyDocument).monkey = 'Macaque';
```
