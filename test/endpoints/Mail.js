process.env.NODE_ENV = 'local-dev'
const app = require(`${process.env.PWD}/app`)
, request = require("supertest")


module.exports = () => {
    describe('Test mailer', () => {

        var postParams = {
            from: 'asdf@gmail.com'
            , to: 'asdf@gmail.com'
            , subject: 'a test'
            , content: 'simple test'
        };
        
        var failPostParams = {
            subject: 'a test'
            , content: 'simple test'
        };
        

        it('response 201', function(done) {
            this.timeout(6000);

            request(app)
            .post('/mail')
            .send(postParams)
            .expect(201, done)
        });

        it('response 400', function(done) {
            this.timeout(6000);

            request(app)
            .post('/mail')
            .send(postParams)
            .expect(400, done)
        });

    });


}