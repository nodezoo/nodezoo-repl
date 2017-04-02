/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var Seneca = require('seneca')

Seneca({tag: 'repl'})
  .test('print')

  .use('mesh', {
    base: true,
    host: '@eth0',
    port: 39000,
    sneeze: {silent:false}
  })

  .use('entity')

  .use('seneca-repl', {
    host: '0.0.0.0',
    port: 10000
  })
