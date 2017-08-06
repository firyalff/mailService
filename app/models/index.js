"use strict";

const Utils = require(`${process.env.PWD}/app/helpers/Utils`)
, dbConfig = require(`${process.env.PWD}/configs/database`)
, dbURL = `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.domain}:${dbConfig.port}/${dbConfig.database}`
, Mongoose = require('mongoose')

Mongoose.connect(dbURL, { useMongoClient: true })

var dbConnection = Mongoose.connection

dbConnection.on('error', () => {return new Error('Connection to MongoDB failed')});

var registeredModels = {};

Utils.promisedFS(__dirname)
.then(files => {
	files
	.filter( filename => {
		return filename !== 'index.js' 
	})
	.forEach( (modelName, index) => {
		var modelName = modelName.split('.')[0];
		registeredModels[modelName] = require(`${process.env.PWD}/app/models/${modelName}`)
	})
})
.catch( err => {
	console.error(err)
})

module.exports = registeredModels;