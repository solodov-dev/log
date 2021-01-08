---
title: iife in jsx...
date: jul 14, 2020
tags: [css, iife, js, jsx]
---

- [You can use IIFE in JSX](https://react-cn.github.io/react/tips/if-else-in-JSX.html)

  ```jsx
  return (
    <section>
      <h1>Color</h1>
      <h3>Name</h3>
      <p>{this.state.color || 'white'}</p>
      <h3>Hex</h3>
      <p>
        {(() => {
          switch (this.state.color) {
            case 'red':
              return '#FF0000';
            case 'green':
              return '#00FF00';
            case 'blue':
              return '#0000FF';
            default:
              return '#FFFFFF';
          }
        })()}
      </p>
    </section>
  );
  ```

- To prevent scrolling of underlying content when the sidebar menu is open

  ```css
  body {
    overflow: hidden;
  }
  ```

- For smooth scrolling on the page

  ```jsx
  window.scrollTo({ top: 0, behavior: 'smooth' });
  ```

- Changing opacity/filter/transform property on a parent component breaks [CSS stacking context](https://tiffanybbrown.com/2015/09/css-stacking-contexts-wtf/index.html)
