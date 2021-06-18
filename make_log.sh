#!/bin/bash


if [ $# -eq 0 ] || [$1 -eq '']; then
  echo 'Please input a filename!'
  exit 0
fi

pushd src/data

cat > $1.md << EOF
---
date: "$(date +"%Y-%m-%d")"
title: 
tags: []
---
EOF

vim $1.md
