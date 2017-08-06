"use strict";

const Models = require(`${process.env.PWD}/app/models`)
, APIFormat = require(`${process.env.PWD}/app/helpers/ResponseFormat`)
, Auth = require(`${process.env.PWD}/app/kernels/Auth`)
, methods = {
	login(req, res, next) {
		req.assert('username', 'Invalid username').notEmpty();
        req.assert('password', 'Invalid password').notEmpty();

        var errors = req.validationErrors();

        if (errors.length>0) {
            req.error = {
                status : 404
                , message : 'Tidak ditemukan'
                , body: errors
            }
            return next();
        }

        Models.Users.findOne({username: req.body.username})
        .exec()
        .then( user=>{
            if (user===null) {
                reject({message: 'not found'})
            }
            
            return Auth.verify(req.body.password, user.password)
        })
        .then( verified=>{
            var auth = Auth.signIn(req.body.username)
            return res.status(200).json(APIFormat.response(
                'You are logged in'
                , {token: auth}
                ))
        })
        .catch( err=>{
            console.error(err)
            return res.json({error: err})    
        })
    }
    , logout(req, res) {
        return res.json({ok: 'oce2'})
    }
}

module.exports = methods;