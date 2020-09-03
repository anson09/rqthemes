#!/usr/bin/env bash
set -eu

INJECT_CONTENT=node_modules/element-ui/lib/theme-chalk/base.css
TARGETS=("lib/index.css" "lib/legacy.css")

cp -R node_modules/element-ui/lib/theme-chalk/fonts lib

for ITEM in ${TARGETS[@]}
do
    awk '{print}' $INJECT_CONTENT $ITEM > $ITEM.tmp
    mv $ITEM.tmp $ITEM
done