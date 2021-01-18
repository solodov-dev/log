---
title: Check for circular dependencies
date: oct 12, 2020
tags: [architecture, dependencies, patterns]
---

You can use cli tool called [Madge](https://github.com/auchenberg/node-madge) to check for circular dependencies in you codebase. To check for a circular dependencie give it an entry point:

```bash
madge --circular src/lib/base/modules/common/socket/model/baseGame.ts
```
