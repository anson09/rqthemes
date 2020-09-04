# RQTHEMES

> ricequant common themes

## Goal

- unify mutiple products theme
- save base scss preprocess time

## Usage

First,import one of element-ui themes or both of them

- element light theme: `import '@rqjs/rqthemes/lib/element-light.css'`
- element dark theme: `import '@rqjs/rqthemes/lib/element-dark.css'`
- element product(light-next) theme: `import '@rqjs/rqthemes/lib/element-product.css'`

Second, import entry file, which contains global themes/themes variables/highcharts themes(styled mode)

- in js: `import '@rqjs/rqthemes'`
- or in css: `@import '@rqjs/rqthemes'`
- **ie support light theme only**, and please use `@rqjs/rqthemes/lib/legacy.css`

In the End,

- fetch light vars from `@rqjs/rqthemes/light.json`

## Caveats

- **highcharts reqiure v7.0.0+, using styled mode**
- themes supports only **default** and **plain** button in element

## Commands

```bash
npm run dev : preview element-ui themes,visit http://localhost:1234

npm run build : generating publish files

npm run lint : audit code style

npm run clean : clear demo cache
```

## Branchs

master: https://www.npmjs.com/package/@rqjs/rqthemes

## Contributions

1. colors vars in themes files is **maintained by designer**.

2. [`git 规范`](http://wiki.ricequant.com/pages/viewpage.action?pageId=17269198)

3. [`lint 规范`](http://wiki.ricequant.com/pages/viewpage.action?pageId=45875427)

4. [`npm 发布规范`](http://wiki.ricequant.com/pages/viewpage.action?pageId=52232790)
