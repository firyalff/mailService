"use strict";

if (process.env.NODE_ENV == 'production')
	console.log("\x1b[31m", "You are now in production mode, every transaction are considered as REAL trasaction!");
else
	console.log("\x1b[32m", "You are now in development mode, have fun!");

const app = require('express')()

require(`${process.env.PWD}/app/kernels/ErrHandler`)(app);

require(`${process.env.PWD}/app/kernels/Http`)(app);
require(`${process.env.PWD}/app/kernels/Validator`)(app);
require(`${process.env.PWD}/app/kernels/Security`)(app);

require(`${process.env.PWD}/app/routes`)(app);

module.exports = app;
