---
date: '2021-02-13'
title: Add color independent overlay
tags: [overlay, color, button, css]
---

If you don't know the color of the element, for example you have an array of buttons with different colors, you can add a color-independent overlay with box-shadow property.

```css
button {
  background-color: var(--some-color-here);
}

button:hover {
  box-shadow: inset 0 0 0 99999px rgba(255, 255, 255, 0.2);
}
```
