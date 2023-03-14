import { parse } from '../src/arg'

describe('Parse arguments', () => {
  describe('host', () => {
    test('It resolves "host" as "localhost" when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          host: 'localhost',
        }),
      )
    })

    test('It resolves "host" as given value when a value is given with "-h" option.', () => {
      expect(parse(['-h', '127.0.0.1'])).toStrictEqual(
        expect.objectContaining({
          host: '127.0.0.1',
        }),
      )
    })

    test('It resolves "host" as given value when a value is given with "--host" option.', () => {
      expect(parse(['--host', '127.0.0.1'])).toStrictEqual(
        expect.objectContaining({
          host: '127.0.0.1',
        }),
      )
    })
  })

  describe('port', () => {
    test('It resolves "port" as 8000 when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          port: 8000,
        }),
      )
    })

    test('It resolves "port" as given value when a value is given with "-p" option.', () => {
      expect(parse(['-p', '3000'])).toStrictEqual(
        expect.objectContaining({
          port: 3000,
        }),
      )
    })

    test('It resolves "port" as given value when a value is given with "--port" option.', () => {
      expect(parse(['--port', '3000'])).toStrictEqual(
        expect.objectContaining({
          port: 3000,
        }),
      )
    })
  })

  describe('targetHost', () => {
    test('It resolves "targetHost" as "localhost" when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          targetHost: 'localhost',
        }),
      )
    })

    test('It resolves "targetHost" as given value when a value is given with "-H" option.', () => {
      expect(parse(['-H', '127.0.0.1'])).toStrictEqual(
        expect.objectContaining({
          targetHost: '127.0.0.1',
        }),
      )
    })

    test('It resolves "targetHost" as given value when a value is given with "--target-host" option.', () => {
      expect(parse(['--target-host', '127.0.0.1'])).toStrictEqual(
        expect.objectContaining({
          targetHost: '127.0.0.1',
        }),
      )
    })
  })

  describe('targetPort', () => {
    test('It resolves "targetPort" as 3000 when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          targetPort: 3000,
        }),
      )
    })

    test('It resolves "targetPort" as given value when a value is given with "-P" option.', () => {
      expect(parse(['-P', '8000'])).toStrictEqual(
        expect.objectContaining({
          targetPort: 8000,
        }),
      )
    })

    test('It resolves "targetPort" as given value when a value is given with "--target-port" option.', () => {
      expect(parse(['--target-port', '8000'])).toStrictEqual(
        expect.objectContaining({
          targetPort: 8000,
        }),
      )
    })
  })

  describe('key', () => {
    test('It resolves "key" as undefined when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          key: void 0,
        }),
      )
    })

    test('It resolves "key" as given value when a value is given with "-k" option.', () => {
      expect(parse(['-k', 'localhost-key.pem'])).toStrictEqual(
        expect.objectContaining({
          key: 'localhost-key.pem',
        }),
      )
    })

    test('It resolves "key" as given value when a value is given with "--key" option.', () => {
      expect(parse(['--key', 'localhost-key.pem'])).toStrictEqual(
        expect.objectContaining({
          key: 'localhost-key.pem',
        }),
      )
    })
  })

  describe('cert', () => {
    test('It resolves "cert" as undefined when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          cert: void 0,
        }),
      )
    })

    test('It resolves "cert" as given value when a value is given with "-c" option.', () => {
      expect(parse(['-c', 'localhost.pem'])).toStrictEqual(
        expect.objectContaining({
          cert: 'localhost.pem',
        }),
      )
    })

    test('It resolves "cert" as given value when a value is given with "--cert" option.', () => {
      expect(parse(['--cert', 'localhost.pem'])).toStrictEqual(
        expect.objectContaining({
          cert: 'localhost.pem',
        }),
      )
    })
  })

  describe('changeOrigin', () => {
    test('It resolves "changeOrigin" as true when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: true,
        }),
      )
    })

    test('It resolves "changeOrigin" as true when "-o" option is specified.', () => {
      expect(parse(['-o'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: true,
        }),
      )
    })

    test('It resolves "changeOrigin" as true when a value "1" is given with "-o" option. ', () => {
      expect(parse(['-o', '1'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: true,
        }),
      )
    })

    test('It resolves "changeOrigin" as true when a value "true" is given with "-o" option. ', () => {
      expect(parse(['-o', 'true'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: true,
        }),
      )
    })

    test('It resolves "changeOrigin" as false when a value "0" is given with "-o" option. ', () => {
      expect(parse(['-o', '0'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: false,
        }),
      )
    })

    test('It resolves "changeOrigin" as false when a value "false" is given with "-o" option. ', () => {
      expect(parse(['-o', 'false'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: false,
        }),
      )
    })

    test('It resolves "changeOrigin" as true when "--change-origin" option is specified.', () => {
      expect(parse(['--change-origin'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: true,
        }),
      )
    })

    test('It resolves "changeOrigin" as true when a value "1" is given with "--change-origin" option. ', () => {
      expect(parse(['--change-origin', '1'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: true,
        }),
      )
    })

    test('It resolves "changeOrigin" as true when a value "true" is given with "--change-origin" option. ', () => {
      expect(parse(['--change-origin', 'true'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: true,
        }),
      )
    })

    test('It resolves "changeOrigin" as false when a value "0" is given with "--change-origin" option. ', () => {
      expect(parse(['--change-origin', '0'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: false,
        }),
      )
    })

    test('It resolves "changeOrigin" as false when a value "false" is given with "--change-origin" option. ', () => {
      expect(parse(['--change-origin', 'false'])).toStrictEqual(
        expect.objectContaining({
          changeOrigin: false,
        }),
      )
    })
  })

  describe('followRedirects', () => {
    test('It resolves "followRedirects" as true when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          followRedirects: true,
        }),
      )
    })

    test('It resolves "followRedirects" as true when "-f" option is specified.', () => {
      expect(parse(['-f'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: true,
        }),
      )
    })

    test('It resolves "followRedirects" as true when a value "1" is given with "-f" option. ', () => {
      expect(parse(['-f', '1'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: true,
        }),
      )
    })

    test('It resolves "followRedirects" as true when a value "true" is given with "-f" option. ', () => {
      expect(parse(['-f', 'true'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: true,
        }),
      )
    })

    test('It resolves "followRedirects" as false when a value "0" is given with "-f" option. ', () => {
      expect(parse(['-f', '0'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: false,
        }),
      )
    })

    test('It resolves "followRedirects" as false when a value "false" is given with "-f" option. ', () => {
      expect(parse(['-f', 'false'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: false,
        }),
      )
    })

    test('It resolves "followRedirects" as true when "--follow-redirects" option is specified.', () => {
      expect(parse(['--follow-redirects'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: true,
        }),
      )
    })

    test('It resolves "followRedirects" as true when a value "1" is given with "--follow-redirects" option. ', () => {
      expect(parse(['--follow-redirects', '1'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: true,
        }),
      )
    })

    test('It resolves "followRedirects" as true when a value "true" is given with "--follow-redirects" option. ', () => {
      expect(parse(['--follow-redirects', 'true'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: true,
        }),
      )
    })

    test('It resolves "followRedirects" as false when a value "0" is given with "--follow-redirects" option. ', () => {
      expect(parse(['--follow-redirects', '0'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: false,
        }),
      )
    })

    test('It resolves "followRedirects" as false when a value "false" is given with "--follow-redirects" option. ', () => {
      expect(parse(['--follow-redirects', 'false'])).toStrictEqual(
        expect.objectContaining({
          followRedirects: false,
        }),
      )
    })
  })

  describe('autoRewrite', () => {
    test('It resolves "autoRewrite" as true when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: true,
        }),
      )
    })

    test('It resolves "autoRewrite" as true when "-a" option is specified.', () => {
      expect(parse(['-a'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: true,
        }),
      )
    })

    test('It resolves "autoRewrite" as true when a value "1" is given with "-a" option. ', () => {
      expect(parse(['-a', '1'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: true,
        }),
      )
    })

    test('It resolves "autoRewrite" as true when a value "true" is given with "-a" option. ', () => {
      expect(parse(['-a', 'true'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: true,
        }),
      )
    })

    test('It resolves "autoRewrite" as false when a value "0" is given with "-a" option. ', () => {
      expect(parse(['-a', '0'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: false,
        }),
      )
    })

    test('It resolves "autoRewrite" as false when a value "false" is given with "-a" option. ', () => {
      expect(parse(['-a', 'false'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: false,
        }),
      )
    })

    test('It resolves "autoRewrite" as true when "--auto-rewrite" option is specified.', () => {
      expect(parse(['--auto-rewrite'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: true,
        }),
      )
    })

    test('It resolves "autoRewrite" as true when a value "1" is given with "--auto-rewrite" option. ', () => {
      expect(parse(['--auto-rewrite', '1'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: true,
        }),
      )
    })

    test('It resolves "autoRewrite" as true when a value "true" is given with "--auto-rewrite" option. ', () => {
      expect(parse(['--auto-rewrite', 'true'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: true,
        }),
      )
    })

    test('It resolves "autoRewrite" as false when a value "0" is given with "--auto-rewrite" option. ', () => {
      expect(parse(['--auto-rewrite', '0'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: false,
        }),
      )
    })

    test('It resolves "autoRewrite" as false when a value "false" is given with "--auto-rewrite" option. ', () => {
      expect(parse(['--auto-rewrite', 'false'])).toStrictEqual(
        expect.objectContaining({
          autoRewrite: false,
        }),
      )
    })
  })

  describe('cookieDomainRewrite', () => {
    test('It resolves "cookieDomainRewrite" as false when no option is given.', () => {
      expect(parse([])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: false,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as true when "-d" option is specified.', () => {
      expect(parse(['-d'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: true,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as true when a value "1" is given with "-d" option. ', () => {
      expect(parse(['-d', '1'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: true,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as true when a value "true" is given with "-d" option. ', () => {
      expect(parse(['-d', 'true'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: true,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as false when a value "0" is given with "-d" option. ', () => {
      expect(parse(['-d', '0'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: false,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as false when a value "false" is given with "-d" option. ', () => {
      expect(parse(['-d', 'false'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: false,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as true when "--cookie-domain-rewrite" option is specified.', () => {
      expect(parse(['--cookie-domain-rewrite'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: true,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as true when a value "1" is given with "--cookie-domain-rewrite" option. ', () => {
      expect(parse(['--cookie-domain-rewrite', '1'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: true,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as true when a value "true" is given with "--cookie-domain-rewrite" option. ', () => {
      expect(parse(['--cookie-domain-rewrite', 'true'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: true,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as false when a value "0" is given with "--cookie-domain-rewrite" option. ', () => {
      expect(parse(['--cookie-domain-rewrite', '0'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: false,
        }),
      )
    })

    test('It resolves "cookieDomainRewrite" as false when a value "false" is given with "--cookie-domain-rewrite" option. ', () => {
      expect(parse(['--cookie-domain-rewrite', 'false'])).toStrictEqual(
        expect.objectContaining({
          cookieDomainRewrite: false,
        }),
      )
    })
  })
})
