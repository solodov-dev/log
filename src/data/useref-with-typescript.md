---
title: Useref with typescript
date: jul 20, 2020
tags: [hooks, react]
---

The correct type for a ref with Typescript

```jsx
const inputRef = useRef < HTMLInputElement > null;

return <input ref={inputRef} />;
```
