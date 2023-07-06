# Debugging

## Run & Debug in VSCode[^launch-debugger]

VSCode has a built-in debugger and can debug JavaScript and TypeScript directly. We can configure the debugger to lunch specific debugger environments through a configuration file in a folder called **./vscode** inside our working directory. The configuration file is called **launch.json**. Let's see some examples:

```json
{
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
      // "targetSelection": "pick",
      "url": "https://localhost:44300",
      "port": 9222,
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "Launch Chrome No CORS",
      "request": "launch",
      "type": "chrome",
      "url": "https://localhost:44300",
      "webRoot": "${workspaceFolder}",
      "userDataDir": "${workspaceFolder}/.vscode/chrome",
      "runtimeArgs": [
        "--remote-debugging-port=9222",
        // "--disable-web-security",
        "--user-data-dir=${workspaceFolder}/.vscode/chrome"
      ]
    }
  ]
}
```

## Tasks[^Tasks] in VSCode

Tasks in VS Code can be configured to run scripts and start processes so that many of these existing tools can be used from within VS Code without having to enter a command line or write new code. Workspace or folder specific tasks are configured from the tasks.json file in the .vscode folder for a workspace.

### Custom tasks[^custom-tasks] to run before launching the debugger

For example we want to run a file server before launching a browser for a debugger session.

We define our **.vscode/launch.json** file with a **'preLaunchTask'** and a **'postDebugTask'** as follow:

```json
{
  "version": "0.2.0",
  "configurations": [
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
        // "--disable-web-security",
        "--user-data-dir=${workspaceFolder}/.vscode/chrome"
      ],
      "preLaunchTask": "start http-server",
      "postDebugTask": "stop http-server"
    }
  ]
}
```

Here the **preLaunchTask** and **postDebugTask** are our custom tasks that we are going to define next in **vscode/tasks.json**:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "start http-server",
      "type": "shell",
      "isBackground": true,
      "command": "http-server",
      "args": [
        "--port",
        "44300",
        "-a",
        "localhost",
        "--tls",
        "--cert",
        "'C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+1.pem'",
        "--key",
        "'C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+1-key.pem'"
      ],
      "presentation": { "reveal": "silent" },
      "problemMatcher": [
        {
          "pattern": [
            {
              "regexp": ".",
              "file": 1,
              "line": 1,
              "column": 1,
              "message": 1
            }
          ],
          "background": {
            "activeOnStart": true,
            "beginsPattern": { "regexp": "." },
            "endsPattern": { "regexp": "." }
          }
        }
      ]
    },
    {
      "label": "stop http-server",
      "command": "echo ${input:terminate}",
      "type": "shell"
    }
  ],
  "inputs": [
    {
      "id": "terminate",
      "type": "command",
      "command": "workbench.action.tasks.terminate",
      "args": "terminateAll"
    }
  ]
}
```

Another example but this time with live-server:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "start live-server",
      "type": "shell",
      "isBackground": true,
      "command": "live-server",
      "args": [
        "--host=localhost",
        "--port=44300",
        "--no-browser",
        "--https=\"C:\\Users\\idmoi_000\\AppData\\Local\\liveServer\\live-serve-config.js\""
      ],
      "presentation": {
        "reveal": "always",
        "panel": "new"
      },
      "problemMatcher": [
        {
          "pattern": [
            {
              "regexp": ".",
              "file": 1,
              "line": 1,
              "column": 1,
              "message": 1
            }
          ],
          "background": {
            "activeOnStart": true,
            "beginsPattern": { "regexp": "." },
            "endsPattern": { "regexp": "." }
          }
        }
      ]
    },
    {
      "label": "stop live-server",
      "command": "echo ${input:terminate}",
      "type": "shell"
    }
  ],
  "inputs": [
    {
      "id": "terminate",
      "type": "command",
      "command": "workbench.action.tasks.terminate",
      "args": "terminateAll"
    }
  ]
}
```

#### References:

Automatically starting a server when starting a debug session in VSCode [see it here](https://christianheilmann.com/2022/03/17/automatically-starting-a-server-when-starting-a-debug-session-in-vs-code/).

[^launch-debugger]: https://code.visualstudio.com/docs/editor/debugging#:~:text=To%20bring%20up%20the%20Run,debugging%20commands%20and%20configuration%20settings.
[^Tasks]: https://code.visualstudio.com/docs/editor/tasks
[^custom-tasks]: https://code.visualstudio.com/docs/editor/tasks#_custom-tasks
