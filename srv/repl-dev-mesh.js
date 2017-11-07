/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var Seneca = require('seneca')

Seneca({tag: 'repl'})
  //.test('print')
  .use('monitor', {collect: true})

  .use('mesh', {
    base: true,
  })

  .use('entity')

  .use('seneca-repl', {
    port: 10000
  })

  .ready(function () {
    this.sub('role:transport,type:balance,remove:client', function (msg) {
      this.act('role:monitor,cmd:update', {data:['D',msg.meta.instance]})
    })
  })
