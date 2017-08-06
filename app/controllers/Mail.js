"use strict";

const Models = require(`${process.env.PWD}/app/models`)
, APIFormat = require(`${process.env.PWD}/app/helpers/ResponseFormat`)
, WorkerRegister= require(`${process.env.PWD}/app/kernels/QueueWorker`)
, methods = {
	store(req, res, next) {
		req.assert('from', 'Invalid from').isEmail();
        req.assert('to', 'Invalid to').isEmail();
        req.assert('subject', 'Invalid subject').notEmpty();
        req.assert('content', 'Invalid content').notEmpty();

        var errors = req.validationErrors();

        if (errors.length>0) {
            return res.status(400).json(APIFormat.response(
                'Form error'
                , {}
                , errors
                ))
        }

        WorkerRegister('Mailer.sendMail'
            , {
                from: 'firyalff@firyal.mail'
                , to: 'firyal.fakhrilhadi@gmail.com'
                , subject: 'lomer mail'
                , content: 'Lorem Upsim Lodor Tis atem'
                , mailService: 'sendgrid'
            })

        return res.json(APIFormat.response(
                'Sending mail'
                , {}
                ))
    }
}

module.exports = methods;