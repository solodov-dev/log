---
date: '2021-02-08'
title: Named capture groups
tags: [regex, regular expressions, es2018, js]
---

In es2018 you can use named capture groups. The result of regex.exec will be a `match` object.

```js
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = re.exec('2020-03-04');

console.log(match.groups); // → {year: "2020", month: "03", day: "04"}
console.log(match.groups.year); // → 2020
console.log(match.groups.month); // → 03
console.log(match.groups.day); // → 04
```
