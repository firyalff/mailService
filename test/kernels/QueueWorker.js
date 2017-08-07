'use strict';

module.exports = () => {
	const expect = require('chai').expect
	, proxyquire = require('proxyquire')
	, sinon = require("sinon")
	, QueueWorker = require(`${process.env.PWD}/app/kernels/QueueWorker`)
	, Kue = proxyquire('kue', {createQueue(){
		return { create(jobType, data){ return{ on(){} } } }
	}})
	, config = {
		secret: 'atestsecret'
	}


	describe("Queue worker register", function() {


	})
}
