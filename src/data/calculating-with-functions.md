---
date: '2021-02-16'
title: Calculating with functions
tags: [kata, codewars, solution]
---

I really enjoyed this one! You can find this kata [here](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/javascript);

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:

```js
const r = (fn, n) => (fn ? fn(n) : n);

const zero = (f) => r(f, 0);
const one = (f) => r(f, 1);
const two = (f) => r(f, 2);
const three = (f) => r(f, 3);
const four = (f) => r(f, 4);
const five = (f) => r(f, 5);
const six = (f) => r(f, 6);
const seven = (f) => r(f, 7);
const eight = (f) => r(f, 8);
const nine = (f) => r(f, 9);

const plus = (a) => (b) => b + a;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => b * a;
const dividedBy = (a) => (b) => Math.floor(b / a);
```
