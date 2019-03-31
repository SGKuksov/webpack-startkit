# Webpack start kit

Based on https://habr.com/ru/post/350886/

## Todo

3. Добавить сборку стилей и путей
4. Реализовать сборку блоков (pug, scss, js)

## Plugins

https://github.com/trivago/parallel-webpack

## Some example

```js
const config = require('./config/config');

module.exports = (env, argv) => {
  // if (argv.mode === 'development') {}
  // if (argv.mode === 'production') {}

  const production = argv.mode === 'production';
  config.devtool = production ? false : 'eval-sourcemap';
  return config;
};
```
