'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"https://www.kacheyixing.com/owservice/"'
  // API_HOST: '"http://192.168.0.102:8090/owservice/"'
  // API_HOST: '"http://192.168.0.201:8091/owservice/"'
  // API_HOST: '"/api"'
})
