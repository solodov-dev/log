---
title: prevent input of special characters
date: sep 25, 2020
tags: [react]
---

Prevent input. For example - input only digits.

```jsx
<Input
  onKeyPress={(e) => {
    if (/[^\d]/.test(e.key)) e.preventDefault();
  }}
/>
```
