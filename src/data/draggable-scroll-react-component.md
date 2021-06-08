---
date: '2021-06-08'
title: React draggable scroll component
tags: [react, scroll, drag]
---

Reusable mouse-drag for scroll react component

```ts
import React, { ReactNode, useRef, useState } from 'react';

export default function Draggable(props: {
  children: ReactNode;
  className?: string;
}) {
  const [pos, setPos] = useState({
    left: 0,
    top: 0,
    x: 0,
    y: 0,
    mouseIsDown: false,
  });
  const wrapper = useRef<HTMLDivElement>(null);

  function handleDown(e: React.MouseEvent<HTMLDivElement>) {
    if (!wrapper.current) return;

    const pos = {
      left: wrapper.current.scrollLeft,
      top: wrapper.current.scrollTop,
      x: e.clientX,
      y: e.clientY,
      mouseIsDown: true,
    };

    setPos(pos);
  }

  function handleDrag(e: React.MouseEvent) {
    if (!wrapper.current || !pos.mouseIsDown) return;
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;
    wrapper.current.scrollLeft = pos.left - dx;
    wrapper.current.scrollTop = pos.top - dy;
  }

  function handleUp() {
    setPos((p) => ({ ...p, mouseIsDown: false }));
  }

  return (
    <div
      className={props.className}
      ref={wrapper}
      onMouseDown={handleDown}
      onMouseMove={handleDrag}
      onMouseUp={handleUp}
      style={{ cursor: pos.mouseIsDown ? 'grabbing' : 'grab' }}
    >
      {props.children}
    </div>
  );
}
```
