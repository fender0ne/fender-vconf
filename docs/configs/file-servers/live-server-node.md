# Live-server Node

## Live-Server Node Package[^Live-server]

> We need a server if your site fetches content through JavaScript.

### Globally installed (recommended)

Global installation:

```bash
npm install -g live-server
```

> For using **https** we need a configuration file that we save in convenience local user locations. The configuration file was named **live-server-config.js** en saved to "C:\Users\idmoi_000\AppData\Local\liveServer\"

```js
let fs = require('fs');

module.exports = {
  cert: fs.readFileSync('C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+1.pem'),
  key: fs.readFileSync('C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+1-key.pem'),
  passphrase: '12345',
};
```

Running the server:

```bash
live-server
    --host=localhost
    --port=44300
    --no-browser
    --https="C:\Users\idmoi_000\AppData\Local\liveServer\live-serve-config.js"
```

Or with `npx` to execute the latest

```bash
npx live-server
    --host=localhost
    --port=44300
    --no-browser
    --https=live-serve-config.js
```

[^Live-server]: https://github.com/tapio/live-server
