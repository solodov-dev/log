---
date: "2021-03-17"
title: Problems with opacity percentage in sass
tags: [sass, opacity]
---

Percentage values are fine in css:

```css
opacity: 30%;
```

but when used in sass, it will compile it to:

```css
opacity: 1%;
```

use floats instead:

```sass
opacity: 0.3;
```
