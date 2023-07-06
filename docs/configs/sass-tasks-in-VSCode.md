## Some tasks in VSCode to run the Sass Transpiler

```json
{
  "label": "SASS: compile .\\css\\style.scss",
  "type": "shell",
  "command": "sass",
  "args": [
    "--watch",
    "--no-source-map",
    ".\\css\\style.scss",
    ".\\css\\style.scss.css"
  ],
  "group": "none",
  "presentation": {
    "echo": true,
    "reveal": "always",
    "focus": false,
    "panel": "shared",
    "showReuseMessage": true,
    "clear": false
  },
  "problemMatcher": []
},
{
  "label": "SASS: compile current SASS file.",
  "type": "shell",
  "command": "sass",
  "args": ["--watch", "${file}", "${file}.css"],
  "group": "none",
  "presentation": {
    "echo": true,
    "reveal": "always",
    "focus": false,
    "panel": "shared",
    "showReuseMessage": true,
    "clear": false
  },
  "problemMatcher": []
},
{
  "label": "SASS: choose a SASS file to compile.",
  "type": "shell",
  "command": "sass",
  "args": ["--watch", "${input:pickFile}", "${input:pickFile}.css"],
  "group": "none",
  "presentation": {
    "echo": true,
    "reveal": "always",
    "focus": false,
    "panel": "shared",
    "showReuseMessage": true,
    "clear": false
  },
  "problemMatcher": []
}
```

Defining some inputs:

```json
{
  "id": "pickFile",
  "type": "pickString",
  "description": "What type of component do you want to create?",
  "options": [
    ".\\css\\main.scss",
    ".\\css\\main\\header\\headerMenu.scss",
    "${file}",
    "pipe",
    "service"
  ],
  "default": ".\\css\\main.scss"
},
{
  "id": "outputFile",
  "type": "promptString",
  "description": "Output file.",
  "default": "${file}"
}
```

## Run the sass transpiler as tasks in VSC

- From the global terminal menu: <kbd>F1</kbd> > Tasks: Run Task > Chose the task
- Directly using shortcuts keys: <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F10</kbd> > Chose the task
- Or from the terminal panel > launch profile > Run Task

![[SASS-task-in-VSC.jpg]](https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81pYhycw97do2uhCeTscRMunkyknn5k5fF9OrAPKUCjUpAEtdTT97B9b2diwvNjM_8iqO61cHIYVElNA_exwA45gk4v0NQ=w2048-h1019)
