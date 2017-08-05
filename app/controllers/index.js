"use strict";

const Utils = require(`${process.env.PWD}/app/helpers/Utils`)

var registeredController = {};

Utils.promisedFS(__dirname)
.then( files => {
	files
	.filter( filename => {
		return filename !== 'index.js' 
	})
	.forEach( (ctrlFile, index) => {
		var ctrlName = ctrlFile.split('.')[0];
		registeredController[ctrlName] = require(`${process.env.PWD}/app/controllers/${ctrlName}`)
	})
})
.catch( err => {
	console.error(err)
})

module.exports = registeredController;


