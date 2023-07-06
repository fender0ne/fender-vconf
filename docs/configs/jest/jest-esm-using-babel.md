# Jest & ESM (ES Modules) using Babel

Add the following section to your `package.json` if it is not already there:

- package.json:
  > ```json
  > {
  >   "scripts": { "test": "jest" },
  >   // default value. It can not be **module**
  >   "type": "commonjs"
  > }
  > ```

:warning: Jest do not work well with ES6 modules, it prefers CommonJS syntax, so to use ES6 modules we need to install and set up a transpiler like Babel to compile your ES module syntax down to CommonJS syntax.  
Projects like React and Vue support ES modules because they use Babel under the hood to compile the code.

To use [Babel](https://babeljs.io/), install required dependencies:

```powershell
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Configure Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project:

- babel.config.js:

> ```js
> module.exports = {
>   presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
> };
> ```

Now you can write your tests using ES modules syntax and they will be compiled.
To run the tests, use the following command:

```
npm run test
```

---

See more here:

- [ES6 Class Mocks](https://jestjs.io/docs/es6-class-mocks)
- [ECMAScript Modules]https://jestjs.io/docs/ecmascript-modules
