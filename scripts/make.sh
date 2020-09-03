#!/usr/bin/env bash
set -eu

parcel() {
    SOURCE=$1
    TARGET=$2
    npx parcel build $SOURCE --no-cache --no-minify --no-source-maps -d lib --out-file $TARGET
}

./scripts/updep.sh
rm -rf lib
parcel src/index.scss index.css
LEGACY=true parcel src/index.scss legacy.css
parcel src/element-light.scss element-light.css
parcel src/element-dark.scss element-dark.css
