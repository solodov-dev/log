---
date: "2021-03-18"
title: De Morgan's theorems
tags: [boolean operators, logic]
---

Apply DeMorgan's Theorems to simplify boolean tests with negatives

| Initial Expression | Equivalent Expression |
|--------------------|-----------------------|
|    `!A && !B`      |      `!(A && B)`      |
|    `!A && B`       |      `!(A || !B)`     |
|    `A && !B`       |      `!(!A || B)`     |
|    `A && B`        |      `!(!A || !B)`    |
|    `!A || !B`      |      `!(A && B)`      |
|    `!A || B`       |     `!(A && !B)`      |
|    `A || !B`       |     `!(!A && B)`      |
|    `A || B`        |     `!(!A && !B)`     |
