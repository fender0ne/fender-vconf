# Certificates

## mkcert[^cert]

mkcert automatically creates and installs a **local CA** in the system root store, and generates **locally-trusted certificates**. mkcert does not automatically configure servers to use the certificates, though, that's up to you.

We have installed mkcert with [`chocolatey`](https://chocolatey.org/) UI v1.4.4

## Installation of mkcert root certificate (New local CA).

As simple as running:

```PowerShell
mkcert -install
```

mkcert root certificate warning:

![[mkcert-root-certificate-warning.jpg]](https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81ruixbJ5ROqJPzW9mNESupNycK9bwJ8qacvkETxiaQ75fpR5n2m22_0Mepoe9lVCYSFlVe7mXnfxab-8n-fzZW4d0AcMA=w1618-h1002)

Created a new local CA at "C:\\Users\\idmoi_000\\AppData\\Local\\mkcert":

![[installing-local-mkcert-CA.jpg]](https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qUQAVA33JD7RBvJ4o-YoIHSSr1JSRUwLvszxqXnaxtoZpUDQvSb_hEHHfUwTugIgae6OeivGzZE4B9UUfp9W3GgxXbgw=w2048-h1019)

Let's check the new local CA in windows certificate manager:

```PowerShell
certmgr
```

![[windows-certificate-manager.jpg]](https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81oqo-jDsEXpjon68IrwEOyaQGjgP14cD1t3DCygDUKLZtpYIBwUFFgkIfnCtHpBv-VgdEHGLz-XbsM_AWDGI0AUliwkhQ=w2048-h1019)

> :warning:
> Do not use this in production.  
> You must never share the **rootCA-key.pem** file created by mkcert with anyone. It must not leave your computer as it would give an attacker power to intercept any secure request to your machine.  
> The root certificate is what makes your browsers accept the self-signed certificates created by mkcert as valid.

## Creating local certificates

Example: create a certificate for 127.0.0.1

```PowerShell
mkcert 127.0.0.1
```

> Created a new certificate valid for the following names: "127.0.0.1"  
> The **certificate** is at "./127.0.0.1.pem" and the **key** at "./127.0.0.1-key.pem"  
> It will expire on 4 July 2025

We create a folder in c:\, for instance "c:\\Users\\idmoi_00\\.mkcert", and save there the certificate (with public key, 127.0.0.1.pem) and the private key (127.0.0.1-key.pem).

![[Store-mkcert-certificates.jpg]](https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81oepyht4prAavfhB8eOAO-cPyyBJbRXm5J9543daPMDx-RQOyGe4GStd4ZK7WrrYIFzVFbTokF9OaJJ_4xuVT5GId0avA=w2048-h1019)

and I set the https option in liveServer settings in VSC:

```json
"liveServer.settings.https": {
  "enable": true,
  "cert": "C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1.pem",
  "key": "C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1-key.pem",
  "passphrase": "12345"
}
```

Further examples:

```PowerShell
mkcert 127.0.0.1 localhost
```

> The certificate is at "./127.0.0.1+1.pem" and the key at "./127.0.0.1+1-key.pem"

```PowerShell
mkcert 127.0.0.1 "*.127.0.0.1" localhost "*.localhost"
```

> Created a new certificate valid for the following names:

- "127.0.0.1"
- "\*.127.0.0.1"
- "localhost"
- "\*.localhost"

> :warning:
> Many browsers don't support second-level wildcards like "\*.localhost"  
> Reminder: X.509 wildcards only go one level deep, so this won't match a.b.127.0.0.1  
> The certificate is at "./127.0.0.1+3.pem" and the key at "./127.0.0.1+3-key.pem"

And again, I set the https option in liveServer settings in VSC:

```json
"liveServer.settings.https": {
  "enable": true,
  "cert": "C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+3.pem",
  "key": "C:\\Users\\idmoi_000\\.mkcert\\127.0.0.1+3-key.pem",
  "passphrase": "12345"
}
```

[^cert]:
    https://github.com/FiloSottile/mkcert  
    https://mkcert.org/
