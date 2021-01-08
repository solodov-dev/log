---
title: mapping over enum in typescript
date: jul 30, 2020
tags: [typescript]
---

- Creating an object from enum by iterating over it with Object.keys

```tsx
enum QuestionStatus {
  CREATED = 'CREATED',
  PUBLISHED = 'PUBLISHED',
  REJECTED = 'REJECTED',
}

function getQuestionStatusTitle(status: QuestionStatus): string | undefined {
  switch (status) {
    case QuestionStatus.CREATED:
      return 'Cоздан';
    case QuestionStatus.PUBLISHED:
      return 'Опубликован';
    case QuestionStatus.REJECTED:
      return 'Отклонен';
  }
}

function createTableFilters<T>(
  statuses: T,
  getTitle: (status: T[keyof T]) => string | undefined
) {
  return Object.keys(statuses).map((key) => ({
    value: key,
    text: getTitle(statuses[key as keyof T]),
  }));
}
```
