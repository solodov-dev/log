---
date: "2021-03-12"
title:Toggle browser full screen
tags: [browser, js]
---

Toggle browser full screen with JS:

```js
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
```
