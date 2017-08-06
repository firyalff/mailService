const MailService = require(`${process.env.PWD}/app/services/Mail`)
, methods = {
	sendMail(data, done){
		MailService[data.mailService](data, done)
	}
}

module.exports = methods