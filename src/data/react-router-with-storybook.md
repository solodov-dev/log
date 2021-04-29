---
date: '2021-04-17'
title: Using react router with storybook
tags: [react, router, storybook]
---

In `./storybook/preview.js`:

```js
import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));
```
