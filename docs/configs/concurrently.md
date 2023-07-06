# [`Concurrently`](https://github.com/open-cli-tools/concurrently)

Concurrently is a **utility** to run multiple commands concurrently. It is intended to be used with npm scripts, but can be used from the command line too.

### Installation:
```bash
npm i concurrently --save-dev
```

## Running commands in parallel:

We are using `concurrently` as a convenience way of running commands in parallel trough our npm scripts.

### Example:

```json
"scripts": {
	"dev": "concurrently --prefix \"{pid}-{name}\" --kill-others \"npm:dev:*\"",
    "dev:scss": "npm run scss:watch",
    "dev:server": "live-server --host=localhost --port=44300 --https=\"C:\\Users\\idmoi_000\\AppData\\Local\\liveServer\\live-serve-config.js\"",
    "scss:watch": "sass --watch --no-source-map css/"
}
```
### Execution in terminal:

```bash
npm run dev
```

### Execution as a task in VSCode

Execute it directly from the task manager <kbd>F1</kbd> -> `Task: Run Task`  -> `Dev Concurrently`

- task.json:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Dev Concurrently",
      "type": "npm",
      "script": "dev",
      "presentation": {
        "clear": true,
        "reveal": "silent",
        "showReuseMessage": true
      },
      "problemMatcher": []
    }
  ]
}
```	
