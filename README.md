# dev-rev-proxy

An out-of-box proxy server to help development using SSL on local machine.

## Install

```sh
npm install -g dev-rev-proxy
```

## Usage

```sh
dev-rev-proxy --host app.local --port 443 --cert app.local.pem --key app.local-key.pem --target-host localhost --target-port 3000 --cookie-domain-rewrite
```

```sh
=> proxy server has started listening on https://app.local:443, forwarding to http://localhost:3000
```

## Options

- -h, --host
  - Hostname on which the proxy server should listen.
  - default: `localhost`
- -p, --port
  - Port number on which the proxy server should listen.
  - default: `localhost`
- -H, --target-host
  - Target hostname to which the proxy server should forward requests.
  - default: `localhost`
- -P, --target-port
  - Target port number to which the proxy server should forward requests.
  - default: `3000`
- -c, --cert
  - Path of the ssl certification file.
  - example: `localhost.pem`
- -k, --key
  - Path of the ssl certification key file.
  - example: `localhost-key.pem`
- -o, --change-origin
  - When true, proxy server changes the origin of the host header to the target hostname.
  - default: `true`
- -f, --follow-redirects
  - When true, proxy server follows the redirect headers.
  - default: `true`
- -a, --auto-rewrite
  - When true, proxy server rewrites the location host/port on (301,302,307,308) redirects based on requested host/port.
  - default: `true`
- -d, --cookie-domain-rewrite
  - When true, proxy srever rewrites domain of set-cookie headers.
  - default: `false`
