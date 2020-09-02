#!/usr/bin/env bash
set -eu

LAST_VERSION=$(<depVersion)

if [ ! -f .depVersion ]; then
  touch .depVersion
  echo $LAST_VERSION > .depVersion
  npm ci
  exit 0
fi

LOCAL_VERSION=$(<.depVersion)

if [ $LAST_VERSION -gt $LOCAL_VERSION ]; then
  echo $LAST_VERSION > .depVersion
  npm ci
  exit 0
fi
