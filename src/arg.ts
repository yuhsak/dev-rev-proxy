import parseArgs from 'minimist'
import { combine, str, int, bool } from 'envvv'

const typed = combine([
  str('host')('localhost'),
  int('port')(8000),
  str('targetHost')('localhost'),
  int('targetPort')(3000),
  str('key')(),
  str('cert')(),
  bool('help')(false),
  bool('changeOrigin')(true),
  bool('followRedirects')(true),
  bool('autoRewrite')(true),
  bool('cookieDomainRewrite')(false),
])

export type DevRevProxyOption = Omit<ReturnType<typeof typed>, 'help'>

export const parse = (args: string[]) => {
  const option = parseArgs(args, {
    string: ['port', 'targetPort'],
    alias: {
      h: 'host',
      p: 'port',
      H: 'targetHost',
      P: 'targetPort',
      k: 'key',
      c: 'cert',
      o: 'changeOrigin',
      f: 'followRedirects',
      a: 'autoRewrite',
      d: 'cookieDomainRewrite',
      'target-host': 'targetHost',
      'target-port': 'targetPort',
      'change-origin': 'changeOrigin',
      'follow-redirects': 'followRedirects',
      'auto-rewrite': 'autoRewrite',
      'cookie-domain-rewrite': 'cookieDomainRewrite',
    },
  })

  option.help = option.help === true ? 'true' : 'false'
  option.changeOrigin = option.changeOrigin === true ? 'true' : 'false'
  option.followRedirects = option.followRedirects === true ? 'true' : 'false'
  option.autoRewrite = option.autoRewrite === true ? 'true' : 'false'
  option.cookieDomainRewrite = option.cookieDomainRewrite === true ? 'true' : 'false'

  return typed(option)
}
