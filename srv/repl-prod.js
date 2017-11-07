/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var HOST = process.env.HOST
var CONSUL = process.env.CONSUL_SERVICE_HOST || 'localhost'

var Seneca = require('seneca')

Seneca({tag: 'repl'})
  .test('print')

  .use('consul-registry', {
    host: CONSUL
  })

  .use('mesh', {
    base: true,
    //host: HOST,
    host: '@eth0',
    port: 39000,
    sneeze: {silent:false},
    discover: {
      registry: {
        active: true
      }
    }
  })

  .use('entity')

  .use('seneca-repl', {
    host: '0.0.0.0',
    port: 10000
  })
