'use strict';

module.exports = (app) => {
	const APIFormat  = require(__dirname+'/../helpers/APIFormat')

	app.use((err, req, res, next) => {
		console.log('APP ERR :' , err, 'END OF APP ERR')
		console.log('APP ERR STACK:' , err.stack, 'END OF APP ERR STACK')
		res.status(err.status || 500);
		res.render('error/500', {
			layout:'layouts/master',
			error: err.stack
		});
	});
}
