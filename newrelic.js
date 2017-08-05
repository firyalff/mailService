'use strict'

const nrConfig = require(`${process.env.PWD}/configs/monitoring`)

exports.config = {
  app_name: nrConfig.app_name
  , license_key: nrConfig.license_key
  , logging: nrConfig.logging
}
