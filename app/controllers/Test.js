"use strict";

const Models = require(`${process.env.PWD}/app/models`)
, APIFormat  = require(`${process.env.PWD}/app/helpers/ResponseFormat`)
, RegisterWorker  = require(`${process.env.PWD}/app/kernels/QueueWorker`)
, methods = {
	index(req, res, next) {
		return res.json({ok: 'oce'})
	}
	, show(req, res, next) {
		Models.Comments.find().exec()
		.then( comments => {
			return res.json(APIFormat.response(
				'Comment list'
				, {comments}
				))
		})
		.catch( err => {
			return next()
		})
	}
	, store(req, res, next) {
		var newComment = new Models.Comments({
			author: req.body.author
			, text: req.body.text
		})

		newComment.save()
		.then( savedComment => {
			return res.json(APIFormat.response(
				'Comment saved'
				, {newComment: savedComment}
				))
		})
		.catch( err => {
			return next()
		})
	}
	, destroy(req, res, next) {
		Models.Comments.findByIdAndRemove(req.params.commentId)
		.then( deletedComment => {
			return res.json(APIFormat.response(
				'Comment deleted'
				, {deletedComment}
				))
		})
		.catch( err => {
			return next()
		})
	}
	, tryWorker(req, res, next){
		RegisterWorker('Mailer.sendMail', {name: 'John', surname: 'Doe'})
		return res.json({status: 'good'})
	}
}

module.exports = methods;