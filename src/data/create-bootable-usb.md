---
title: Create bootable usb
date: oct 7, 2020
tags: [linux, shell]
---

```bash
dd bs=4M if=/path/to/bootable/file.iso of=/dev/sdx status=progress && sync
```
