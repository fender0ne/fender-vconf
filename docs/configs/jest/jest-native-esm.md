# Jest: native support of ECMAScript modules

According to [this issue](https://github.com/facebook/jest/issues/9430), there is native support of ESM from `jest@25.4.0`. So you won't have to use babel anymore. To activate it we need to do three things:

1. Make sure you don't transform away `import` statements by setting `transform: {}` in config file
2. Run `node@^12.16.0 || >=13.2.0` with `--experimental-vm-modules` flag
3. Run your test with `jest-environment-node` or `jest-environment-jsdom-sixteen`.

<br/>

4. One more thing to make this work: package.json should contain `"type": "module"` for Node to detect files as ESM. See [this](https://nodejs.org/api/packages.html#packages_determining_module_system)

Your Jest configuration file `jest.config.js` should contain at least this:

- jest.config.js

> ```javascript
> export default {
>   testEnvironment: 'jest-environment-node',
>   transform: {},
> };
> ```

And we will have to run Jest as follows:

```javascript
node --experimental-vm-modules node_modules/jest/bin/jest.js
```

Then our `package.json` should have these two lines:

- package.json:

> ```json
> {
>   "scripts": {
>     "test:esm": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
>   },
>
>   "type": "module"
> }
> ```

Also note in the Github issue that this approach does not yet support the `jest` object. So you may need to import it manually:

```javascript
import { jest } from '@jest/globals';
```
