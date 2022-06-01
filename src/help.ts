import path from 'path'
import fs from 'fs'

export type HelpMessageLineForOptionInput = {
  args: string[]
  descriptions: string[]
}

export const getHelpMessageLinesForOptions = (inputs: HelpMessageLineForOptionInput[]) => {
  const a = inputs.map(({ args, descriptions }) => {
    return {
      args: args.join(', ') + ':  ',
      descriptions,
    }
  })

  const maxLength = a.reduce((len, { args }) => (len > args.length ? len : args.length), 0)

  const b = a.flatMap(({ args, descriptions }): string[] => {
    const arg = args + ' '.repeat(maxLength - args.length)
    const line = arg + (descriptions[0] || '')
    const lines = descriptions
      .filter((_, i) => i > 0)
      .map((description) => ' '.repeat(arg.length) + description)
    return [line, ...lines, '']
  })

  return b
}

export const getHelpMessage = () => {
  const { name, version } = JSON.parse(
    fs.readFileSync(path.join(`${__dirname}`, '../../', 'package.json'), 'utf-8'),
  )

  const lines: string[] = []

  lines.push(`${name}\n\n`)
  lines.push(`version:\n`)
  lines.push(`\t${version}\n\n`)
  lines.push('options:\n')

  const options = getHelpMessageLinesForOptions([
    {
      args: ['-h', '--host'],
      descriptions: ['Hostname on which the proxy server should listen.', 'default: localhost'],
    },
    {
      args: ['-p', '--port'],
      descriptions: ['Port number on which the proxy server should listen.', 'default: localhost'],
    },
    {
      args: ['-H', '--target-host'],
      descriptions: [
        'Target hostname to which the proxy server should forward requests.',
        'default: localhost',
      ],
    },
    {
      args: ['-P', '--target-port'],
      descriptions: [
        'Target port number to which the proxy server should forward requests.',
        'default: 3000',
      ],
    },
    {
      args: ['-c', '--cert'],
      descriptions: ['Path of the ssl certification file.', 'example: localhost.pem'],
    },
    {
      args: ['-k', '--key'],
      descriptions: ['Path of the ssl certification key file.', 'example: localhost-key.pem'],
    },
    {
      args: ['-o', '--change-origin'],
      descriptions: [
        'When true, proxy server changes the origin of the host header to the target hostname.',
        'default: true',
      ],
    },
    {
      args: ['-f', '--follow-redirects'],
      descriptions: ['When true, proxy server follows the redirect headers.', 'default: true'],
    },
    {
      args: ['-a', '--auto-rewrite'],
      descriptions: [
        'When true, proxy server rewrites the location host/port on (301,302,307,308) redirects based on requested host/port.',
        'default: true',
      ],
    },
    {
      args: ['-d', '--cookie-domain-rewrite'],
      descriptions: [
        'When true, proxy srever rewrites domain of set-cookie headers.',
        'default: false',
      ],
    },
  ])

  lines.push(options.map((line) => '\t' + line).join('\n'))

  lines.push(`\nexample:\n`)
  lines.push(
    `\tdev-rev-proxy --host app.local --port 443 --cert app.local.pem --key app.local-key.pem --target-host localhost --target-port 3000 --cookie-domain-rewrite\n`,
  )
  lines.push(
    `\t=> proxy server has started listening on https://app.local:443, forwarding to http://localhost:3000`,
  )

  return lines.join('')
}
