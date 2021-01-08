---
title: autofill in chrome
date: aug 3, 2020
tags: [js, react, typescript]
---

[Chrome ignores autocomplete="off"](https://stackoverflow.com/a/32578659)

## In React (with ref)

```tsx
const ref = useRef<Password>(null);

<Input.Password
  readOnly
  onFocus={() => ref.current?.input.removeAttribute('readonly')}
  ref={ref}
/>;
```

## In plain HTML

```jsx
<input readonly onfocus="this.removeAttribute('readonly');" />
```
