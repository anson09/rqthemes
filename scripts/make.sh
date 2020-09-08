#!/usr/bin/env bash
# set -euo pipefail

parcel() {
    SOURCE=$1
    TARGET=$2
    npx parcel build $SOURCE --no-cache --no-minify --no-source-maps -d lib --out-file $TARGET
}

./scripts/updep.sh
rm -rf lib

parcel src/index.scss index.css
LEGACY=true parcel src/index.scss legacy.css
parcel src/element-ui/light.scss element-light.css
parcel src/element-ui/product.scss element-product.css
parcel src/element-ui/dark.scss element-dark.css

INJECT_CONTENT=node_modules/element-ui/lib/theme-chalk/base.css
LEGACY_FILE_PATH=lib/legacy.css
TARGETS=(lib/index.css $LEGACY_FILE_PATH)

for ITEM in ${TARGETS[@]}
do
    awk '{print}' $INJECT_CONTENT $ITEM > $ITEM.tmp
    mv $ITEM.tmp $ITEM
done

cp -R node_modules/element-ui/lib/theme-chalk/fonts lib

UNCOEVR_VARIABLES=$(cat $LEGACY_FILE_PATH|grep -A 1 undefined)

if [ -n "$UNCOEVR_VARIABLES" ]
then
    echo ">>> illegal legacy.css"
    echo $UNCOEVR_VARIABLES
    rm -rf $LEGACY_FILE_PATH
    exit 1
fi

echo "$(sed '/:root{}/d' $LEGACY_FILE_PATH)" > $LEGACY_FILE_PATH