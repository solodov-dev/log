---
title: waiting for the element to load in react-testing-library
date: aug 10, 2020
tags: [react, react-testing-library, testing]
---

```jsx
const linkElement = await waitForElement(() =>
  getByText(/Text to be included in your app/i)
);
expect(linkElement).toBeInTheDocument();
```
