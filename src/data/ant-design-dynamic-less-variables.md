---
title: ant-design dynamic less variables
date: sep 17, 2020
tags: [ant-design, less]
---

### Install dependencies

```bash
npm i -D antd-theme-webpack-plugin babel-plugin-import customize-cra less less-loader react-app-rewired
```

### Create config-overrides.js (same level as package.json)

```jsx
const path = require('path');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
} = require('customize-cra');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const options = {
  stylesDir: path.join(__dirname, './src'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/styles/vars.less'),
  themeVariables: ['@primary-color'],
  lessUrl: 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js',
  indexFileName: 'index.html',
  generateOnce: false, // generate color.less on each compilation
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackPlugin(new AntDesignThemePlugin(options)),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  })
);
```

### In your index.html

```html
<script>
  window.less = { async: false, env: 'production' };
</script>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"
></script>
```

### Create src/styles/vars.less file

```less
@import '~antd/lib/style/themes/default.less';
@primary-color: #dada;
```

### Now you can change less variables in your code

```tsx
(window as any).less.modifyVars({ '@primary-color': getRequiredEnv('REACT_APP_PRIMARY_COLOR') }};
```
