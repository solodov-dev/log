---
title: Import multiple files from a directory with webpack
date: nov 25, 2020
tags: [react, webpack]
---

```js
function importAll(r: any): Array<any> {
  return r.keys().map(r);
}

const slides = importAll(require.context('./assets', true));
```
