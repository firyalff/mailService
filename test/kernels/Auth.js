'use strict';
module.exports = () => {
	const expect = require('chai').expect
	, should = require('chai').should
	, proxyquire = require('proxyquire')
	, sinon = require("sinon")
	, Auth = require(`${process.env.PWD}/app/kernels/Auth`)
	, bcrypt = proxyquire('bcryptjs', {compare(){}})
	, config = {
		secret: 'atestsecret'
	}


	describe("Response format helper", function() {
		it('should return a rejected promise', ()=> {
			var verify = Auth.verify()
			
			verify.should.be.rejected;
		})

		it('should return a JWT', ()=> {
			var signIn = Auth.signIn('a sample')
			
			expect(signIn).to.be.a('string');
		})

	})
}
