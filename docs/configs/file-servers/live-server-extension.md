# Live-server Extension

## LiveServe serving using https protocol

For our example project, We want LiveServer to serve it on
**https://localhost:44300**; Then in our workspace configuration folder
(**.vscode**), we have edited the **settings.json** file to setup liveServer as
follow:

```json
{
  "liveServer.settings.host": "localhost",
  "liveServer.settings.port": 44300,
  "liveServer.settings.https": {
    "enable": true,
    "cert": "C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+3.pem",
    "key": "C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+3-key.pem",
    "passphrase": "12345"
  }
}
```

## Remote Debugging

We want to allow remote debugging using chrome, then we add the following to settings.json:

```json
"liveServer.settings.NoBrowser": false,
"liveServer.settings.CustomBrowser": "chrome",
"liveServer.settings.AdvanceCustomBrowserCmdLine":
    "chrome --remote-debugging-port=9222"
```

> :spiral_notepad:
> If we want to disable CORS here, we use the option --disable-web-security:
>
> ```cmd
>  "liveServer.settings.AdvanceCustomBrowserCmdLine":
>    "chrome  
>      --remote-debugging-port=9222
>      --disable-web-security
>      --user-data-dir=C:\\Chrome_dev_session
>    "
> ```
>
> The **user-data-dir** can be whatever folder we want it to have the chrome info.

Now, in the "**.vscode\launch.json**" file we have to add a new configuration for remote debugging using a request to **attach** to our tab target[^vscode-js-debug]:

```json
"version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to Chrome",
      // "targetSelection": "pick",
      "url": "https://localhost:44300",
      "port": 9222,
      "request": "attach",
      "type": "chrome"
    }
  ]
```

If we do not use "url", we could add the "**targetSelection**" option and set it to "**pick**" which let us choose a tab to attach to.

After running LiveServer, which launch a chrome session, we select in "**RUN AND DEBUG**" our new named configuration "**Attach to Chrome**".

> :warning:
> Before try this, close all instances of chrome!

## Local Debugging

We want to allow local debugging using an exclusive instance of chrome, then we add the following line to the 'settings.json' file

```json
"liveServer.settings.NoBrowser": true
```

Now, in .vscode\launch.json we have to add a new configuration for debugging using a request to **launch** our target:

```json
"version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to Chrome",
      // "targetSelection": "pick",
      "url": "https://localhost:44300",
      "port": 9222,
      "request": "attach",
      "type": "chrome"
    },
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "https://localhost:44300",
      "webRoot": "${workspaceFolder}"
    }
  ]
```

> :eye_speech_bubble:
> With this liveServe configuration the "Attach to Chrome" debugging configuration does not work. It is valid only for "Launch Chrome against localhost"

### \* Special case: Launch Chrome with CORS Disabled from VSC

> :spiral_notepad:
> We use it only for debugging and testing purposes

We do not want LiveServe to handle anything about a browser, then our LiveServer settings configuration should looks something like this:

```json
{
  "liveServer.settings.host": "localhost",
  "liveServer.settings.port": 44300,
  "liveServer.settings.https": {
    "enable": true,
    "cert": "C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+3.pem",
    "key": "C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+3-key.pem",
    "passphrase": "12345"
  },
  "liveServer.settings.NoBrowser": true
}
```

and our launch configuration should look something like this:

```json
"version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch No CORS Chrome",
      "url": "https://localhost:44300",
      "webRoot": "${workspaceFolder}",
      "userDataDir": "${workspaceFolder}/.vscode/chrome",
      "runtimeArgs": [
        "--remote-debugging-port=9222",
        "--disable-web-security",
        "--user-data-dir=${workspaceFolder}/.vscode/chrome"
      ]
    }
  ]
```

Now we:

1. run our server: liveServer.
2. launch our browser session: "Launch No CORS Chrome"

## Extra Section

### Testing localhost on multiple devices

1. Find an IP address to share: the IP address of your computer. If you are on windows use the `ipconfig` command to know that IP.
2. Now that you have the address, you can test it on any other device but don’t forget to add the port that your website or web app is running on.

Example:

- localhost on the development machine: https://localhost:44300/
- On the local network: https://192.168.1.52:44300/  
  `ipconfig`: local ipv4 address.....: 192.168.1.52 -

> :signal_strength:
> You must be connected to the same network to view the local IP address on another device.

[^vscode-js-debug]:
    Debugger Options:
    https://github.com/microsoft/vscode-js-debug/blob/main/OPTIONS.md
