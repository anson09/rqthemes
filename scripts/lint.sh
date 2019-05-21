#!/usr/bin/env bash
set -ex

stylelint --fix "src/**/*.scss"
prettier --write "**/*.{scss,json,yml,md}"
