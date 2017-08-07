'use strict';

module.exports = () => {
	const expect = require('chai').expect
	, proxyquire = require('proxyquire')
	, sinon = require("sinon")
	, ResponseFormat = require(`${process.env.PWD}/app/helpers/ResponseFormat`)

	describe("Response format helper", function() {
		it('should have message, result, and error property in response method return', ()=> {
			var response = ResponseFormat.response('Successfully tested', {sample: 123})
			
			expect(response).to.have.property('message');
			expect(response).to.have.property('result');
			expect(response).to.have.property('error');
		})

		it('should have message, result, and error property in responsePaging method return', ()=> {
			var data = {
				values: [1, 2, 3]
				, length: 1
				, start: 0
				, totalData: 3
			}
			, response = ResponseFormat.responsePaging('Successfully tested', data)
			
			expect(response).to.have.property('message');
			expect(response).to.have.property('result');
			expect(response).to.have.property('error');
		})
	})
}
