/* Copyright (c) 2014-2017 Richard Rodger and other contributors, MIT License */

var PORT = process.env.PORT || 9000
var REPL_PORT = process.env.REPL_PORT || 10000
var REPL_HOST = process.env.REPL_HOST || '0.0.0.0'

var Seneca = require('seneca')

Seneca({tag: 'repl'})
  .listen(PORT)

  .use('entity')

  .use('seneca-repl', {port:REPL_PORT, host:REPL_HOST})

  .client({pin:'role:search', host:'search', port:PORT})
  .client({pin:'role:info', host:'info', port:PORT})
  .client({pin:'role:npm', host:'npm', port:PORT})
  .client({pin:'role:github', host:'github', port:PORT})
  .client({pin:'role:suggest', host:'suggest', port:PORT})
