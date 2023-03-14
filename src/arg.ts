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
    string: ['p', 'port', 'P', 'target-port'],
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

  const handleBoolable = (value: any) => {
    if (value === true) return 'true'
    if (value === false) return 'false'
    if (value === 1) return 'true'
    if (value === 0) return 'false'
    return value
  }

  option.help = handleBoolable(option.help)
  option.changeOrigin = handleBoolable(option.changeOrigin)
  option.followRedirects = handleBoolable(option.followRedirects)
  option.autoRewrite = handleBoolable(option.autoRewrite)
  option.cookieDomainRewrite = handleBoolable(option.cookieDomainRewrite)

  return typed(option)
}
