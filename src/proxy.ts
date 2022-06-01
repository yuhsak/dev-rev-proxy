import httpProxy from 'http-proxy'
import { isSSL } from './util'
import type { DevRevProxyOption } from './arg'

export const createProxy = (option: DevRevProxyOption) => {
  const protocol = isSSL(option) ? 'https' : 'http'
  return httpProxy.createProxyServer({
    target: {
      protocol: 'http',
      host: option.targetHost,
      port: option.targetPort,
    },
    changeOrigin: option.changeOrigin,
    followRedirects: option.followRedirects,
    autoRewrite: option.autoRewrite,
    protocolRewrite: option.autoRewrite ? protocol : void 0,
    cookieDomainRewrite: option.cookieDomainRewrite ? option.host : void 0,
  })
}
