---
date: "2021-01-25"
title: CSS flag container
tags: [css, shapes, flag]
---

If you need a css flag shaped container with border and flexible content:

```html
<div class="flag">
  <div class="content">Title</div>
  <div class="fly"/>
</div>
```
And styling:

```css
.flag {
  display: flex;
  color: tomato;
  text-transform: uppercase;
  border-color: tomato;
  border-width: 0;
  border-style: solid;
}

.content {
  padding: 11px 13px 11px 33px;
  border:inherit;
  border-width: 3px 0 3px 3px;
}

.fly {
  position: relative;
  border:inherit;
  border-width: 3px 0;
  width: 30px;
  overflow: hidden;
}

.fly:after {
  content: '';
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  right: -103px;
  transform: translateY(-50%) rotate(45deg);
  border: inherit;
  border-width: 3px;
}
```
[See the example here](https://codepen.io/solodov-dev/pen/XWjLaJV?editors=1100)
