---
title: format usb in linux
date: oct 6, 2020
tags: [linux, shell]
---

1. List connected devices

   ```bash
   df
   ```

2. Unmount usb disk

   ```bash
   sudo umount /dev/sdb1
   ```

3. Format disk

   ```bash
   sudo mkfs.vfat -n 'Manjaro' -I /dev/sdb1
   ```
