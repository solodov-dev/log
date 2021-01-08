---
title: useref with typescript
date: jul 20, 2020
tags: [hooks, react]
---

- The correct type for a ref with Typescript

```jsx
const inputRef = useRef < HTMLInputElement > null;

return <input ref={inputRef} />;
```

- CSS pseudo elements can only be used with the container elements (div, button etc.) but not with <input>
