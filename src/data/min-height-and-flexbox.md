---
date: '2021-05-25'
title: min-height and flexbox
tags: [css, flexbox, height]
---

Flex item cannot be smaller than the size of its content along the main axis.

The defaults are...

```
 min-width: auto
 min-height: auto
```

...for flex items in row-direction and column-direction, respectively.

You can override these defaults by setting flex items to:

min-width: 0
min-height: 0
overflow: hidden (or any other value, except visible)
