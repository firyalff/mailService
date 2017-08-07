"use strict";

const Models = require(`${process.env.PWD}/app/models`)
, APIFormat = require(`${process.env.PWD}/app/helpers/ResponseFormat`)
, WorkerRegister= require(`${process.env.PWD}/app/kernels/QueueWorker`)
, methods = {
    index(req, res, next) {
	}
    , store(req, res, next) {
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
                from: req.body.from
                , to: req.body.to
                , subject: req.body.subject
                , content: req.body.content
                , mailService: 'sendgrid'
            })

        return res.status(201).json(APIFormat.response(
                'Mail sent'
                , {}
                ))
    }
}

module.exports = methods;