"use strict";

const Utils = require(`${process.env.PWD}/app/helpers/Utils`)

var registeredController = {};

Utils.promisedFS(__dirname)
.then(files => {
	files
	.map( filename => {
		if(filename !== "index.js") {
			var ctrlName = filename.split('.')[0];
			registeredController[ctrlName] = require(`${process.env.PWD}/app/controllers/${filename}`)
		}
	})
})
.catch( err => {
	console.error(err)
})

module.exports = registeredController;


