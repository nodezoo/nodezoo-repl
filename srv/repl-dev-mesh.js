/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var Seneca = require('seneca')

Seneca({tag: 'repl', log:'silent', legacy:{xtransport:false}})
  .test()
  .use('monitor', {collect: true})

  .use('mesh', {
    base: true,
    xport: 39000,
    xhost: '127.0.0.1',
    monitor: true,
    xsneeze:{silent:false}
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
