---
date: "2021-02-01"
title: Configure postgresql on arch/manjaro
tags: [postgresql, sql, database]
---

## Installation process

Install the `postgresql` package:

```bash
sudo pacman -S postgresql postgis
```

Switch to the postgres user account and initialize the database cluster:

```bash
sudo su postgres -l
initdb --locale $LANG -E UTF8 -D '/var/lib/postgres/data'
exit
```

Start and enable the `postgresql.service`

```bash
sudo systemctl enable --now postgresql.service
```

## Create a DB user for local development or deployment

```bash
sudo su postgres -c psql
CREATE USER yourusername WITH PASSWORD 'yourpassword';
ALTER ROLE yourusername WITH CREATEDB;
\q
```
