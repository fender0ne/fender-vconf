# Tasks in VSC

[`Tasks`](https://code.visualstudio.com/docs/editor/tasks) in VS Code can be configured to run scripts and start processes from within VS Code without having to enter a command line or write new code. Workspace or folder specific tasks are configured from the tasks.json file in the .vscode folder for a workspace.

## Execute a task

<kbd>F1</kbd> -> `Task: Run Task` -> Select the task to run  
or  
<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F10</kbd> -> Select the task to run

### Example using scripts from the package.json

- task.json:

	```json
	{
		"version": "2.0.0",
		"tasks": [
			{
			  "label": "Dev:server in package.json",
			  "type": "npm",
			  "script": "dev:server",
			  "presentation": {
				"clear": true,
				"reveal": "silent",
				"showReuseMessage": true
			  }
			},
			{
			  "label": "SASS in package.json",
			  "type": "npm",
			  "script": "dev:scss",
			  "presentation": {
				"clear": true,
				"reveal": "silent",
				"showReuseMessage": false
			  }
			},
			{
			  "label": "Development",
			  "dependsOrder": "parallel",
			  "dependsOn": ["SASS in package.json", "Dev:server in package.json"]
			},
			{
		      "label": "Terminate All Tasks",
		      "type": "shell",
		      "command": "echo ${input:terminate}",
		      "problemMatcher": []
		    },
		]
	}
	```  

- package.json:  
  
  ```json
  "scripts": {
    "dev": "concurrently --prefix \"{pid}-{name}\" --kill-others \"npm:dev:*\"",
    "dev:scss": "npm run scss:watch",
    "dev:server": "live-server --host=localhost --port=44300 --https=\"C:\\Users\\idmoi_000\\AppData\\Local\\liveServer\\live-serve-config.js\"",
    "scss:watch": "sass --watch --no-source-map css/",
    ... ...
  }
  ```

> :bulb: **Note:**
  > The only problem here is that unlike [`concurrently`](https://www.npmjs.com/package/concurrently) which runs the commands in the same shell where you run the concurrently command (in our example: npm run dev) and you can kill both processes (ctrl+C) at the same time, with task they run in two different shells inside the VSCode terminal and can only be terminated separately or close the vscode terminal or define another task that will terminate all the open task (see the task called `Terminate All Task`)
