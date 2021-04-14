---
title: Mapping over enum in typescript
date: jul 30, 2020
tags: [typescript, enum]
---

Creating an object from enum by iterating over it with `Object.keys`:

```tsx
enum QuestionStatus {
  CREATED,
  PUBLISHED,
  REJECTED,
}

const titles = {
  [QuestionStatus.CREATED]: 'Создан',
  [QuestionStatus.PUBLISHED]: 'Опубликован',
  [QuestionStatus.REJECTED]: 'Отклонен',
};

function createTableFilters<T>(statuses: T) {
  return Object.keys(statuses).map((key) => ({
    value: key,
    text: titles[key],
  }));
}
```
