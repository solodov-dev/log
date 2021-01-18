---
title: Prevent input of special characters
date: sep 25, 2020
tags: [react]
---

Prevent input by RegEx. For example - input only digits.

```jsx
<Input
  onKeyPress={(e) => {
    if (/[^\d]/.test(e.key)) e.preventDefault();
  }}
/>
```
