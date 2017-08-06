"use strict";

const Utils = require(`${process.env.PWD}/app/helpers/Utils`)
, jobRegistrar = (jobEngine, workerName, workerMethods) => {
	for (var key in workerMethods) {

		jobEngine.process(`${workerName}.${key}`, function (job, done){
			var promisedProcess = (data) => { 
				return new Promise((resolve, reject) => {
					resolve(workerMethods[`${key}`](job.data))
				})
			}

			promisedProcess(job.data)
			.then( (value) => {
				done && done();
			})
		});
	}
}

module.exports = (jobs) => {
	Utils.promisedFS(__dirname)
	.then( files => {
		files
		.filter( filename => {
			return filename !== 'index.js' 
		})
		.forEach( (workerFile, index) => {
			var workerName = workerFile.split('.')[0]
			, workerMethods = require(`${process.env.PWD}/app/workers/${workerName}`)

			jobRegistrar(jobs, workerName, workerMethods)
		})
	})
	.catch( err => {
		console.error(err)
	})
}
