#!/usr/bin/env node

import fs from 'fs'
import http from 'http'
import https from 'https'
import type { Duplex } from 'stream'
import { isSSL } from './util'
import { getHelpMessage } from './help'
import { parse } from './arg'
import { createProxy } from './proxy'

const option = parse(process.argv.slice(2))

if (option.help) {
  console.log(getHelpMessage())
  process.exit(0)
}

const protocol = isSSL(option) ? 'https' : 'http'

const logError = (e: any) => {
  console.error('proxy server has captured a fatal error during handling connection.')
  console.error('error:', e)
}

const proxy = createProxy(option).on('error', logError)

const web = (req: http.IncomingMessage, res: http.ServerResponse) => {
  req.on('error', (e) => {
    logError(e)
    res.end()
  })
  res.on('error', (e) => {
    logError(e)
    res.end()
  })
  proxy.web(req, res)
}

const ws = (req: http.IncomingMessage, socket: Duplex, head: any) => {
  req.on('error', (e) => {
    logError(e)
    socket.end()
  })
  socket.on('error', (e) => {
    logError(e)
    socket.end()
  })
  proxy.ws(req, socket, head)
}

const server = isSSL(option)
  ? https.createServer(
      {
        key: fs.readFileSync(option.key),
        cert: fs.readFileSync(option.cert),
      },
      web,
    )
  : http.createServer(web)

server.on('upgrade', ws)

server.on('error', logError)

server.listen(option.port, option.host, () => {
  console.log(
    `proxy server has started listening on ${protocol}://${option.host}:${option.port}, forwarding to http://${option.targetHost}:${option.targetPort}`,
  )
})
