---
date: '2021-01-12'
title: 35 expamples for find command
tags: [find, linux, shell]
---

## 1. Find Files Using Name in Current Directory

Find all the files whose name is tecmint.txt in a current working directory.

```bash
# find . -name tecmint.txt

./tecmint.txt
```

## 2. Find Files Under Home Directory

Find all the files under /home directory with name tecmint.txt.

```bash
# find /home -name tecmint.txt

/home/tecmint.txt
```

## 3. Find Files Using Name and Ignoring Case

Find all the files whose name is tecmint.txt and contains both capital and small letters in /home directory.

```bash
# find /home -iname tecmint.txt

./tecmint.txt
./Tecmint.txt
```

## 4. Find Directories Using Name

Find all directories whose name is Tecmint in / directory.

```bash
# find / -type d -name Tecmint

/Tecmint
```

## 5. Find PHP Files Using Name

Find all php files whose name is tecmint.php in a current working directory.

```bash
# find . -type f -name tecmint.php

./tecmint.php
```

## 6. Find all PHP Files in Directory

Find all php files in a directory.

```bash
# find . -type f -name "*.php"

./tecmint.php
./login.php
./index.php
```

## 7. Find Files With 777 Permissions

Find all the files whose permissions are 777.

```bash
# find . -type f -perm 0777 -print
```

## 8. Find Files Without 777 Permissions

Find all the files without permission 777.

```bash
# find / -type f ! -perm 777
```

## 9. Find SGID Files with 644 Permissions

Find all the SGID bit files whose permissions set to 644.

```bash
# find / -perm 2644
```

## 10. Find Sticky Bit Files with 551 Permissions

Find all the Sticky Bit set files whose permission are 551.

```bash
# find / -perm 1551
```

## 11. Find SUID Files

Find all SUID set files.

```bash
# find / -perm /u=s
```

## 12. Find SGID Files

Find all SGID set files.

```bash
# find / -perm /g=s
```

## 13. Find Read Only Files

Find all Read Only files.

```bash
# find / -perm /u=r
```

## 14. Find Executable Files

Find all Executable files.

```bash
# find / -perm /a=x
```

## 15. Find Files with 777 Permissions and Chmod to 644

Find all 777 permission files and use chmod command to set permissions to 644.

```bash
# find / -type f -perm 0777 -print -exec chmod 644 {} \;
```

## 16. Find Directories with 777 Permissions and Chmod to 755

Find all 777 permission directories and use chmod command to set permissions to 755.

```bash
# find / -type d -perm 777 -print -exec chmod 755 {} \;
```

## 17. Find and remove single File

To find a single file called tecmint.txt and remove it.

```bash
# find . -type f -name "tecmint.txt" -exec rm -f {} \;
```

## 18. Find and remove Multiple File

To find and remove multiple files such as .mp3 or .txt, then use.

```bash
# find . -type f -name "*.txt" -exec rm -f {} \;

 OR

# find . -type f -name "*.mp3" -exec rm -f {} \;
```

## 19. Find all Empty Files

To find all empty files under a certain path.

```bash
# find /tmp -type f -empty
```

## 20. Find all Empty Directories

To file all empty directories under a certain path.

```bash
# find /tmp -type d -empty
```

## 21. File all Hidden Files

To find all hidden files, use the below command.

```bash
# find /tmp -type f -name ".*"
```

## 22. Find Single File Based on User

To find all or single file called tecmint.txt under / root directory of owner root.

```bash
# find / -user root -name tecmint.txt
```

## 23. Find all Files Based on User

To find all files that belong to user Tecmint under /home directory.

```bash
# find /home -user tecmint
```

## 24. Find all Files Based on Group

To find all files that belong to the group Developer under /home directory.

```bash
# find /home -group developer
```

## 25. Find Particular Files of User

To find all .txt files of user Tecmint under /home directory.

```bash
# find /home -user tecmint -iname "*.txt"
```

## 26. Find Last 50 Days Modified Files

To find all the files which are modified 50 days back.

```bash
# find / -mtime 50
```

## 27. Find Last 50 Days Accessed Files

To find all the files which are accessed 50 days back.

```bash
# find / -atime 50
```

## 28. Find Last 50-100 Days Modified Files

To find all the files which are modified more than 50 days back and less than 100 days.

```bash
# find / -mtime +50 –mtime -100
```

## 29. Find Changed Files in Last 1 Hour

To find all the files which are changed in the last 1 hour.

```bash
# find / -cmin -60
```

## 30. Find Modified Files in Last 1 Hour

To find all the files which are modified in the last 1 hour.

```bash
# find / -mmin -60
```

## 31. Find Accessed Files in Last 1 Hour

To find all the files which are accessed in the last 1 hour.

```bash
# find / -amin -60
```

## 32. Find 50MB Files

To find all 50MB files, use.

```bash
# find / -size 50M
```

## 33. Find Size between 50MB – 100MB

To find all the files which are greater than 50MB and less than 100MB.

```bash
# find / -size +50M -size -100M
```

## 34. Find and Delete 100MB Files

To find all 100MB files and delete them using one single command.

```bash
# find / -type f -size +100M -exec rm -f {} \;
```

## 35. Find Specific Files and Delete

Find all .mp3 files with more than 10MB and delete them using one single command.

```bash
# find / -type f -name *.mp3 -size +10M -exec rm {} \;
```
