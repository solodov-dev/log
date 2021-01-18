---
title: Multiple setstate
date: sep 12, 2020
tags: [hooks, react]
---

If you call multiple setState functions, React can batch them into a single operation.
If `count` is 5 and you call `setCount(count + 1)` three times, each time it's going to set the state to 5 + 1. At the end of the batch the state will be 6. If you call `setCount(c => c + 1)` three times, your state will increased by 1 three times. At the end of the batch, the state will be 8.
The general rule is that if your new state relies on the current state, always use an updater function, even if you don't plan to call multiple setState functions.
