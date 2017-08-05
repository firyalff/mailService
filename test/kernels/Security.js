const expect = require('chai').expect
, proxyquire = require('proxyquire')
, sinon = require("sinon")
, Http = require(`${process.env.PWD}/app/kernels/Http`)
, emptySecurityConfigSample = proxyquire(`${process.env.PWD}/configs/security`, {})
, validSecurityConfigSample = proxyquire(`${process.env.PWD}/configs/security`, {
  csrf: false
  , xframe: 'SAMEORIGIN'
  , hsts: {
    maxAge: 31536000
    , includeSubDomains: true
    , preload: true
  }
  , xssProtection: true
  , nosniff: true
})
, lusca = proxyquire('lusca', {method(){}})

describe("Http kernel", function() {
  var app, spyUse, spyDisable
  
  beforeEach(function () {
    app = {
      use(obj) {}
      , disable(config) {}
    }
    
    spyUse = sinon.spy(app, 'use')
    spyDisable = sinon.spy(app, 'disable')

    Http(app)
  });

  it('should throw exception for invalid lusca security config object', ()=> {
    spyUse.calledWith(lusca(emptySecurityConfigSample))
  })

  it('should apply lusca as security middleware', ()=> {
    spyUse.calledWith(lusca(emptySecurityConfigSample))
  })

  it('should disable x-powered-by setting', ()=> {
    spyDisable.calledWith('x-powered-by')
  })

})