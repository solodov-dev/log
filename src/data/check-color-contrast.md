---
title: Check color contrast
date: jul 12, 2020
tags: [color, js]
---

The equation is called ‘YIQ’ because it converts the RGB color space into YIQ, which takes into account the different impacts of its constituent parts. Again, the equation returns `bright` or `dark` and it’s also very easy to implement.

```js
function getContrast(color: string) {
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'bright' : 'dark';
}
```
