'use strict'

const nrConfig = require('./app/configs/'+((process.env.NODE_ENV==='local-dev')?'local-dev/':'')+'newrelic')[process.env.NODE_ENV];

exports.config = {
  app_name: nrConfig.app_name
  , license_key: nrConfig.license_key
  , logging: nrConfig.logging
}
