---
title: Autofill in chrome
date: aug 3, 2020
tags: [js, react, autofill, chrome]
---

Chrome ignores [autocomplete="off"](https://stackoverflow.com/a/32578659) on input elements. To disable autocomplete in Chrome

In React (with ref):

```tsx
const ref = useRef<Password>(null);

<Input.Password
  readOnly
  onFocus={() => ref.current?.input.removeAttribute('readonly')}
  ref={ref}
/>;
```

In plain HTML:

```jsx
<input readonly onfocus="this.removeAttribute('readonly');" />
```
