'use strict'
const mongoose = require('mongoose')
, Schema = mongoose.Schema
, FailedMailsSchema = new Schema({
  from: String
  , to: String
  , subject: String
  , content: String
  , retry: String
})

module.exports = mongoose.model('FailedMails', FailedMailsSchema);
