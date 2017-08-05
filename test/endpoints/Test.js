process.env.NODE_ENV = 'local-dev'
const app = require(`${process.env.PWD}/app`)
, request = require("supertest")

describe('Test routes', () => {
	var postParams;

    it('response 200', function(done) {
        this.timeout(6000);

        request(app)
        .get('/test')
        .set('x-access-token', '')
        .send()
        .expect('Content-Type', /json/)
        .expect(200, done)
    });

});

describe('Test2 routes', () => {
	var postParams;

    it('response 200', function(done) {
        this.timeout(6000);

        request(app)
        .get('/test')
        .send()
        .expect('Content-Type', /json/)
        .expect(200, done)
    });

});