'use strict'

const Kue = require('kue')
, Jobs = Kue.createQueue()
, Workers = require(`${process.env.PWD}/app/workers`)(Jobs)
, registerJob = (jobType, data) => {
	var job = Jobs.create(jobType, data)

	job
	.on('complete', function (){
		console.log('Job', job.id, 'with name is done')
	})
	.on('failed', function (){
		console.log('Job', job.id, 'with name has failed')
	})
	.save()
}

module.exports = registerJob