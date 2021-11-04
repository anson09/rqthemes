#!/usr/bin/env bash
set -eu

if [ "$*" == "--disable" ]; then
    hasHook=false
elif [ "$*" == "--enable" ]; then
    hasHook=true
else
    echo "invalid hook params, please set --enable or --disable"
    exit 1
fi

if [ "$(uname)" == "Darwin" ]; then
    if $hasHook; then
        sed -i '' "s/@prepare/prepare/" package.json
    else
        sed -i '' "s/prepare/@prepare/" package.json
    fi
elif [ "$(uname)" == "Linux" ]; then
    if $hasHook; then
        sed -i "s/@prepare/prepare/" package.json
    else
        sed -i "s/prepare/@prepare/" package.json
    fi
else
    echo "unknow system"
    exit 1
fi
