'use strict';

module.exports = () => {
	const expect = require('chai').expect
	, proxyquire = require('proxyquire')
	, sinon = require("sinon")
	, Utils = require(`${process.env.PWD}/app/helpers/Utils`)

	describe("utils helper accessObjectPropertyByString", function() {
		var object
		beforeEach(function () {
			object = {
				key: 123
				, name: 'John Doe'
				, child: [{
					key: 1231
					, name: 'John Rue'
				}]
			}
		})

		it('should returns the object property by name using string', ()=> {
			var objectProp = Utils.accessObjectPropertyByString(object, 'name')
			
			expect(objectProp).to.equal('John Doe')
		})

		it('should returns null for no string match', ()=> {
			var objectProp = Utils.accessObjectPropertyByString(object, 'bio')
			
			expect(objectProp).to.equal(null)
		})

		// it('should throw exception for undefined parameters', ()=> {
		// 	expect(function(){ Utils.accessObjectPropertyByString() }).to.throw(TypeError)
		// })
	})

	describe("utils helper promisedFS", function() {

	})
}