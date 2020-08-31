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

## Caveats

- `highcharts` reqiure v7.0.0+, using styled mode
- themes supports only **default** and **plain** button in element

## Usage

- in js: import '@rqjs/rqthemes'
- in css: @import '@rqjs/rqthemes'
- **ie support light theme only**, and please use @rqjs/rqthemes/legacy.css
- fetch light vars from @rqjs/rqthemes/light.json

## Commands

```bash
npm run dev : preview element themes

npm run build : build to css

npm run lint : audit code style

npm run clean : clear cache
```

## Branchs

master: https://www.npmjs.com/package/@rqjs/rqthemes

## Developer

import src/index.scss directly in project, modify and see changes.

## Contributions

1. colors vars in themes files is **maintained by designer**.

2. [`git 规范`](http://wiki.ricequant.com/pages/viewpage.action?pageId=17269198)

3. [`lint 规范`](http://wiki.ricequant.com/pages/viewpage.action?pageId=45875427)

4. [`npm 发布规范`](http://wiki.ricequant.com/pages/viewpage.action?pageId=52232790)
