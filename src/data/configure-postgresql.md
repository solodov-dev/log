---
date: "2021-02-01"
title: Configure postgresql on arch/manjaro
tags: [postgresql, sql, database]
---

## Installation process

Install the `postgresql` package. It will also create a system user called `postgres`

```bash
sudo pacman -S postgresql postgis
```

Switch to the postgres user account and initialize the database cluster:

```bash
sudo su postgres -l # or sudo -iu postgres
initdb --locale $LANG -E UTF8 -D '/var/lib/postgres/data'
exit
```

Start and enable the `postgresql.service`

```bash
sudo systemctl enable --now postgresql.service
```

## Create database/user

Become a postgres user. Add a new database user using the `createuser` command:

```bash
[postgres]$ createuser --interactive
```
Create a new database over which the above user has read/write privileges using the `createdb` command (execute this command from your login shell if the database user has the same name as your Linux user, otherwise add `-O database-username` to the following command):

```bash
createdb myDatabaseName
```
