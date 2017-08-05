'use strict';

module.exports = (app) => {
	try{
		const secConfig = require(`${process.env.PWD}/configs/security`)
		, lusca = require('lusca');

		app.use(lusca(secConfig));
		app.disable('x-powered-by');

		return true;
	}
	catch(e){
		return false;
	}

}