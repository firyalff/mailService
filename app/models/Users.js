'use strict'
const mongoose = require('mongoose')
, Schema = mongoose.Schema
, UsersSchema = new Schema({
	username: {
		type: String
		, unique: true
		, required: true
	}
	, password: {
		type: String
		, required: true
	}
})

UsersSchema.pre('save', function(callback) {
	var user = this
	if (!user.isModified('password')) {
		return callback()
	}

	bcrypt.hash(user.password, 5, function(err, hash) {
		if (err) {
			return callback(err)
		}
		user.password = hash
		callback()
	})
})

module.exports = mongoose.model('Users', UsersSchema)
