"use strict";

const Models = require(`${process.env.PWD}/app/models`)
, APIFormat  = require(`${process.env.PWD}/app/helpers/ResponseFormat`)
, methods = {
	store(req, res, next) {
		req.assert('username', 'Invalid username').notEmpty();
		req.assert('password', 'Invalid password').notEmpty();

		var errors = req.validationErrors();

		if (errors.length>0) {
			return res.status(403).json(APIFormat.response(
				'Form error'
				, {}
				, errors
				))
		}

		var newUser = new Models.Users({
			username: req.body.username
			, password: req.body.password
		})

		newUser.save()
		.then( newUser => {
			return res.status(201).json(APIFormat.response(
				'Successfully registered'
				, {}
				))
		})
		.catch( err => {
			return res.status(500).json(APIFormat.response(
				'internal server error'
				, {}
				, err
				))
		})


	}
}

module.exports = methods;