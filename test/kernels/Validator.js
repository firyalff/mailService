'use strict';

module.exports = () => {
	const expect = require('chai').expect
	, proxyquire = require('proxyquire')
	, sinon = require("sinon")
	, Validator = require(`${process.env.PWD}/app/kernels/Validator`)
	, expressValidator = proxyquire('express-validator', {method(option){}})

	describe("Validator kernel", function() {
		var app, spyUse, customValidators

		beforeEach(function () {
			app = {
				use(obj) {}
			}

			spyUse = sinon.spy(app, 'use')

			Validator(app)
		})

		it('should throw exception for non object type custom validator', ()=> {
			customValidators = 'a string'

			spyUse.calledWith(expressValidator({expressValidator}))
		})

		it('should apply express validator with empty custom validator', ()=> {
			customValidators = {}

			spyUse.calledWith(expressValidator({expressValidator}))
		})

		it('should apply express validator with custom validator', ()=> {
			customValidators = {
				check() { return true }
			}

			spyUse.calledWith(expressValidator({expressValidator}))
		})

	})
}