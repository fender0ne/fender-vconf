# Jest VSCode Extension

## We have installed two extension related to Jest:

- [vscode-jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) that supports full [jest](https://jestjs.io/ 'https://jestjs.io/') features in vscode environment.
- [vscode-jest-runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) the simples way to run or debug a single (or multiple) tests **from context-menu**

  > :spiral_notepad:
  > **vscode-jest-runner** is focused on running or debugging a specific test or
  > test-suite, while **vscode-jest** is running your current test-suite every time
  > you change it.

## Basic configuration

Add the following command to settings, to pass command line arguments:

> - settings.json:
>
> ```json
> {
>   "jest.jestCommandLine": "npm run test --",
>   "jestrunner.jestCommand": "npm run test --"
> }
> ```

Let see another example:

```json
{
  "jestrunner.jestCommand": "npm run test:esm --",
  "jest.jestCommandLine": "npm run test:esm --",
  "jest.autoRun": {
    "watch": false,
    "onSave": "test-file",
    "onStartup": ["all-tests"]
  }
}
```

## Jest-runner Debug Option with ESM Native

For the Debug option or Debug Test to work using native jest support for ESM we have to include the following in the settings.json[^tahonaPL]:

> - settings.json:
>
> ```json
> {
>   "jestrunner.debugOptions": {
>     "env": { "NODE_OPTIONS": "--experimental-vm-modules" }
>   }
> }
> ```

My weird approach here only for curiosity:

> - settings.json:
>
> ```json
> {
>   "jestrunner.jestPath": "--experimental-vm-modules",
>   "jestrunner.debugOptions": {
>     "args": ["node_modules\\jest\\bin\\jest.js"]
>   }
> }
> ```

## Generate a Debug Test Launch task

We will use the [extension setup tool](https://github.com/jest-community/vscode-jest/blob/master/setup-wizard.md) from the jest-community to generate a debug test launch task in vscode.

<kbd>F1</kbd>><kbd>Jest: setup Extension</kbd> > <kbd>Setup Jest Debug
Config</kbd>

> - launch.json
>
> ```json
> {
>   "name": "vscode-jest-tests.v2",
>   "type": "node",
>   "request": "launch",
>   "runtimeExecutable": "npm",
>   "args": [
>     "run",
>     "test:esm",
>     "--",
>     "--runInBand",
>     "--watchAll=false",
>     "--testNamePattern",
>     "${jest.testNamePattern}",
>     "--runTestsByPath",
>     "${jest.testFile}"
>   ],
>   "cwd": "${workspaceFolder}",
>   "console": "integratedTerminal",
>   "internalConsoleOptions": "neverOpen"
> }
> ```

Another alternative without using the package.json script 'test:esm':

> - launch.json
>
> ```json
> {
>   "name": "Debug Jest ESM Tests",
>   "type": "node",
>   "request": "launch",
>   "runtimeExecutable": "node",
>   "args": [
>     "node_modules/jest/bin/jest.js",
>     "--runInBand",
>     "--no-cache",
>     "--watchAll=false"
>   ],
>   "cwd": "${workspaceRoot}",
>   "console": "integratedTerminal",
>   "internalConsoleOptions": "neverOpen",
>   "env": {
>     "CI": "true",
>     "NODE_OPTIONS": "--experimental-vm-modules"
>   }
> }
> ```

[^tahonaPL]: https://github.com/firsttris/vscode-jest-runner/issues/88#issuecomment-1373485843
