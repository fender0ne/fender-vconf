# Testing

We will use `Jest`[^jest-test] and `jsdom`[^jsdom-test] for unit testing and end-to-end testing.

```bash
# Install jest and jsdom
npm install --save-dev jest
npm install --save-dev jest-environment-jsdom
# Generate a basic configuration file
node_modules\.bin\jest --init
```

:warning: Jest do not work well with ES6 modules, it prefers CommonJS syntax, so to use ES6 modules we need an extra set up:

- [`Jest & ESM (ES modules) using Babel`](../../configs/jest/jest-esm-using-babel.md)
- [`Jest & Native ESM`](../../configs/jest/jest-native-esm.md)
- VSCode [`Jest Extension`](../../configs/jest/Jest-vsc-extension.md)

[^jest-test]: https://jestjs.io/
[^jsdom-test]: (https://github.com/jsdom/jsdom)
