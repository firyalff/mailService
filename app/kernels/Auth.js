"use strict";

const jwt = require('jsonwebtoken')
, bcrypt = require('bcryptjs')
, config = require(`${process.env.PWD}/configs/app`)
, methods = {
	verify(password, hash){
		return new Promise( (resolve, reject)=>{
			bcrypt.compare(password, hash, function(err, isMatch) {
				if (err)  {
					return reject(err)
				}
				else {
					return resolve(isMatch)
				}

			} )
		})
	}
	, signIn(obj){
		return jwt.sign(obj, config.secret)
	}
	, validate(key){
		return jwt.verify(token, key, function(err, decoded) {      
			if (err) {
				return err
			} 
			else {
				return decoded
			}
		})
	}
}

module.exports = methods