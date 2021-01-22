---
date: '2021-01-22'
title: Return a value from a predefined SCSS object
tags: [scss, styles, mixins]
---

One way to create themes for your app is to define a scss object with variables and constants. Given a scss object:

```sccs
$themes: (
  't-green': (
    'primary-01': $green-base-color-1,
    'primary-02': $green-base-color-2,
    'primary-03': $green-base-color-3,
    'primary-light': #ff0023,
  )
)
```

We can return a value with this function:

```scss
@function getVar($key, $themes: $themes) {
  @each $theme, $colors in $themes {
    @return map-get($colors, $key);
  }
}
```
