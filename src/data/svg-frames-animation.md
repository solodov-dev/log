---
title: Svg frames animation
date: aug 24, 2020
tags: [animation, css, svg]
---

```css
/* Using steps() property to scroll through frames */

.btn {
  width: 100px;
  height: 105px;
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 25px;
  z-index: 100;
  background: url('./assets/question.svg') no-repeat;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.2);
  }
}

.btnClicked {
  animation: click 0.5s steps(24) forwards;
}

.btnUnclicked {
  animation: unclick 0.5s steps(24) forwards;
}

@keyframes click {
  100% {
    background-position: -2475px 0;
  }
}

@keyframes unclick {
  0% {
    background-position: -2475px 0;
  }
  100% {
    background-position: 0 0;
  }
}
```
