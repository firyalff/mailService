'use strict'
console.log(123)
var test1= require(`${process.env.PWD}/test/helpers/ResponseFormat`)()
var test2= require(`${process.env.PWD}/test/helpers/Utils`)()

var test3= require(`${process.env.PWD}/test/kernels/Auth`)()
var test4= require(`${process.env.PWD}/test/kernels/Http`)()
var test5= require(`${process.env.PWD}/test/kernels/QueueWorker`)()
var test6= require(`${process.env.PWD}/test/kernels/Security`)()
var test7= require(`${process.env.PWD}/test/kernels/Validator`)()

var test8= require(`${process.env.PWD}/test/endpoints/Mail`)()
var test9= require(`${process.env.PWD}/test/endpoints/Test`)()
