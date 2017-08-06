'use strict';

module.exports = (app) => {
	try{
		const bodyParser = require('body-parser')

		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({	extended: false }));

		app.use(function(req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Credentials', 'true');
			res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
			res.setHeader('Access-Control-Allow-Headers'
				, 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
			res.setHeader('Cache-Control', 'no-cache');
			next();
		});

		return true;
	}
	catch(e){
		console.error(e)
		return false;
	}
	
}
