const expect = require('chai').expect
, proxyquire = require('proxyquire')
, sinon = require("sinon")
, Http = require(`${process.env.PWD}/app/kernels/Http`)
, bodyParser = proxyquire('body-parser', {json(){}, urlencoded(option){}})

describe("Http kernel", function() {
  var app, spyUse
  
  beforeEach(function () {
    app = {
      use(obj) {}
    }
    
    spyUse = sinon.spy(app, 'use');

    Http(app)
  });

  it('should apply bodyParser.json as middleware', ()=> {
    spyUse.calledWith(bodyParser.json())
  })

  it('should apply bodyParser.urlencoded as middleware', ()=> {
    spyUse.calledWith(bodyParser.urlencoded({  extended: false }))
  })

})