const MailConfig = require(`${process.env.PWD}/configs/mail`)
, Models = require(`${process.env.PWD}/app/models`)
, WorkerRegister= require(`${process.env.PWD}/app/kernels/QueueWorker`)
, methods = {
	sendgrid(data, done){
		const SendgridMail = require('sendgrid').mail
		, Sendgrid = require('sendgrid')(MailConfig.credentials.sendgrid.key)
		
		var mail = SendgridMail.Mail(
			SendgridMail.Email(data.from)
			, data.subject
			, SendgridMail.Email(data.to)
			, SendgridMail.Content('text/plain', data.content)
			)
		, request = Sendgrid.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: mail.toJSON()
		})

		Sendgrid.API(request, function (err, response) {
			if (err) {
				console.error(err)
				
				data.mailService = 'mailgun'

				var retry = WorkerRegister('Mailer.sendMail', data)
				
				done(retry)
			}
			else {
				console.log(response)
				
				done()
			}
		})
	}
	, mailgun(data, done){
		const Nodemailer = require('nodemailer')
		, Mailgun = require('nodemailer-mailgun-transport')
		, NodemailerMailgun = Nodemailer.createTransport(Mailgun( {auth: MailConfig.credentials.mailgun}) )
		, mail = {
			from:  data.from
			, to: data.to
			, subject: data.subject
			, html: data.content
		}

		if (data.cc!=null) {
			mail.cc = data.cc
		}

		if (data.bcc!=null) {
			mail.bcc = data.bcc
		}

		NodemailerMailgun.sendMail(mail, function (err, info) {
			if (err) {
				console.error(err)
				data.mailService = 'sendgrid'

				var retry = WorkerRegister('Mailer.sendMail', data)
				
				done(retry)
			}
			else {
				console.log('Response: ' + info);
				done()
			}
		});
	}
}



module.exports = methods