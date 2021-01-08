---
title: switch/case based on object notation
date: dec 28, 2020
tags: [js, jsx, react]
---

```tsx
{
  caseA: () => <CmpA />,
  caseB: () => <CmpB />,
  undefined: () => <CmpC />
}[switchValue]()
```
