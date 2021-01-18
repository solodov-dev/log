---
title: Diagonal gradient
date: nov 19, 2020
tags: [css]
---

```html
<div id="gradient">something here</div>
```

```css
#gradient {
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ), url('images/background.jpg');
  width: 80%;
  height: 400px;
  background-size: cover;
  color: white;
  padding: 20px;
}
```
