'use strict';

module.exports = (app) => {
	const APIFormat  = require(`${process.env.PWD}/app/helpers/ResponseFormat`)

	app.use((err, req, res, next) => {
		console.error('APP ERR STACK:' , err.stack, 'END OF APP ERR STACK')
		
		res.status(err.status || 500);
		
		return res.json(APIFormat.response('Whoops!!!', err.stack));
	});
}
