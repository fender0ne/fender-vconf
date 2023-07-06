# Run & Debug: launch.json file

We can configure the debugger to lunch specific debugger environments through a configuration file in a folder called **./vscode** inside our working directory. The configuration file is called [`launch.json`](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations). Let's see some examples:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Shows active file in Chrome",
      "request": "launch",
      "type": "chrome",
      "file": "${file}"
    },
    {
      "name": "Attach to Chrome",
      "request": "attach",
      "type": "chrome",
      "url": "https://localhost:44300",
      "port": 9222,
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "Http-server & Chrome No CORS",
      "request": "launch",
      "type": "chrome",
      "url": "https://localhost:44300",
      "webRoot": "${workspaceFolder}",
      "userDataDir": "${workspaceFolder}/.vscode/chrome",
      "runtimeExecutable": "stable",
      "runtimeArgs": [
        "--remote-debugging-port=9222",
        "--disable-web-security",
        "--user-data-dir=${workspaceFolder}/.vscode/chrome"
      ],
      // task from tasks.json
      "preLaunchTask": "start http-server",
      "postDebugTask": "stop http-server"
    },
    {
      "name": "Debug Jest ESM Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "node",
      "args": [
        "node_modules/jest/bin/jest.js",
        "--runInBand",
        "--no-cache",
        "--watchAll=false"
      ],
      "cwd": "${workspaceRoot}",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "env": {
        "CI": "true",
        "NODE_OPTIONS": "--experimental-vm-modules"
      }
    }
  ]
}
```
