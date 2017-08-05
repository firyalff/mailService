'use strict';

module.exports = (app) => {
	try{
		const bodyParser = require('body-parser')

		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({	extended: false }));

		return true;
	}
	catch(e){
		console.error(e)
		return false;
	}
	
}
