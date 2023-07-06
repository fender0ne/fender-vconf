# [NPM Scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts)

> An **npm script** is a convenient way to bundle common shell commands like a set of built-in and custom scripts for your project. They are typically **terminal commands** or a string of terminal commands that help automate repetitive tasks. In a project, scripts are stored in a section of the **package.json** file.

## Running Scripts

To execute your Script, use the `npm run <NAME-OF-YOUR-SCRIPT>` command. Some predefined **aliases** convert to `npm run`, like npm test (convert to `npm run test`), npm start (convert to `npm run start`), npm stop, restart, etc.

> :spiral_notepad:  
> - npm looks at a field called scripts in the package.json of a project in order to make things like npm test from the scripts.test field work.  
> - When a script is run, it is run in a new shell, so changes to environment variables are not preserved between commands. If you need to persist environment variables between commands, use the env command:
> ```json
> // for windows
> "scripts": {
>    "aaa": "set NODE_ENV=test && npm run bbb",
>    "bbb": "echo %NODE_ENV%"
>  }
> //In node use process.env.NODE_ENV
> ```
> - If you want to run a script with a different shell than your system default, you can prefix the command with the name of the shell followed by a space. For example, if you want to use bash, you’d use `bash -c 'echo \"hello world\"'`.  
> - npm will automatically set up $PATH to look in node_modules/.bin, so you can just run commands supplied by dependencies and devDependencies directly without doing a global install.


## Sending Arguments to Scripts[^stackoverflow]

The syntax is as follows:

`npm run <command> [-- <args>]`

Note the `--` separator, used to separate the params passed to `npm` command itself, and the params passed to your script.

With the example `package.json`:

```json
"scripts": {
    "grunt": "grunt",
    "server": "node server.js"
}
```

here's how to pass the params to those scripts:

```bash
npm run grunt -- task:target  // invokes `grunt task:target`
npm run server -- --port=1337 // invokes `node server.js --port=1337`
```

_Note_: **If your param does not start with `-` or `--`, then having an explicit `--` separator is not needed; but it's better to do it anyway for clarity.**

```bash
npm run grunt task:target     // invokes `grunt task:target`
```  

> :spiral_notepad:
> The arguments will only be passed to the script specified after `npm run` and not to any `pre` or `post` script.

[^stackoverflow]: https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script?rq=1
