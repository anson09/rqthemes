# RQTHEMES

> ricequant common themes

## Goal

- unify mutiple products theme
- save base scss preprocess time

## Includes

- normalize.css
- themes variables
- global themes
- element themes
- highcharts themes(styled mode)
  <!-- - iconfont -->

## Usage

- in js: import '@rqjs/rqthemes'
- in css: @import '@rqjs/rqthemes'
- **ie support light theme only**, and please use @rqjs/rqrhemes/legacy.css
- place it after element-ui default css file

## Commands

```bash
npm run build : build to css

npm run lint : audit code style

npm run clean : clear cache

npm publish: publish to npm
```

## Branchs

master: https://www.npmjs.com/package/@rqjs/rqthemes

## Developer

import src/index.scss directly in project, modify and see changes.

## Contributions

1. colors vars in themes files is **maintained by designer**.

2. [`git 规范`](http://wiki.ricequant.com/pages/viewpage.action?pageId=17269198)

3. [`lint 规范`](http://wiki.ricequant.com/pages/viewpage.action?pageId=45875427)

4. [`semver 规范`](https://semver.org/) when publish
