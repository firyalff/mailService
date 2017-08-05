"use strict";

const Utils = require(`${process.env.PWD}/app/helpers/Utils`)

var registeredMiddlewares = {};

Utils.promisedFS(__dirname)
.then(files => {
	files
	.filter( filename => {
		return filename !== 'index.js' 
	})
	.forEach( (mdlwrName, index) => {
		var mdlwrName = mdlwrName.split('.')[0];
		registeredMiddlewares[ctrlName] = require(`${process.env.PWD}/app/controllers/${mdlwrName}`)
	})
})
.catch( err => {
	console.error(err)
})

module.exports = registeredMiddlewares;


