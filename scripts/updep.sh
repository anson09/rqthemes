#!/usr/bin/env bash
set -eu

LAST_VERSION=$(<depVersion)

if [[ ${#LAST_VERSION} != 8 && ${#LAST_VERSION} != 10 ]]; then
  echo "depVerison format: YYYYMMDD or YYYYMMDDTT(TT stand for 00 01...)"
  exit 1
fi

if [ ! -f .depVersion ]; then
  touch .depVersion
  echo $LAST_VERSION >.depVersion
  npm ci
  exit 0
fi

LOCAL_VERSION=$(<.depVersion)

if [[ $LAST_VERSION < $LOCAL_VERSION ]]; then
  echo -e "broken version:\nlocal verion - $LOCAL_VERSION\nlast version - $LAST_VERSION\n\
please ensure last version accurately,and run command again"
  rm .depVersion
  exit 1
fi

if [[ $LAST_VERSION > $LOCAL_VERSION ]]; then
  echo $LAST_VERSION >.depVersion
  npm ci
  exit 0
fi
