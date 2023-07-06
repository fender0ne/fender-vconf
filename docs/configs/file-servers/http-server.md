# HTTP Server

## http-server[^1] with TLS/SSL (Basic config)

### Globally installed (recommended)

Global installation:

```bash
npm install -g http-server
```

Running the server:

```bash
http-server --port 44300 -a localhost --tls
--cert "C:\Users\idmoi_000\.mkcert\127.0.0.1+1.pem"
--key "C:\Users\idmoi_000\.mkcert\127.0.0.1+1-key.pem"
```

Or We could running it with `npx` like this:

```bash
npx http-server
  -p 44300
  -a localhost
  -S
  -C "C:\Users\idmoi_000\.mkcert\127.0.0.1+1.pem"
  -K "C:\Users\idmoi_000\.mkcert\127.0.0.1+1-key.pem"
```

> :spiral_notepad:
> For security reasons, the passphrase will only be read from the `NODE_HTTP_SERVER_SSL_PASSPHRASE` environment variable.
>
> ![[set-environment-variable-on-windows.jpg]](https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81phTEymDZJmLG4OrtsPn1G1Qcbvcs8uL9ryWcCSNjIEOEz90JeHOf3LU2j6NG2GcicNLpucW4gftrKPwykBpT8Np5dHWw=w2048-h1019)

[^1]: https://www.npmjs.com/package/http-server
