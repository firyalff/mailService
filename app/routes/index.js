"use strict";

const path = require("path")
, Controllers = require(`${process.env.PWD}/app/controllers`)
, Middlewares = require(`${process.env.PWD}/app/middlewares`)
, Utils = require(`${process.env.PWD}/app/helpers/Utils`)

module.exports = (app) => {
	Utils.promisedFS(__dirname)
	.then(files => {
		files
		.map( filename => {
			if(filename !== "index.js") {
				return require(path.join(__dirname, filename));
			}
		})
		.reduce( (grouproutes, route) => {
			if(route != null){
				return grouproutes.concat(route)
			} 
			else{
				return grouproutes
			}
		}, [])
		.forEach( routeGroup => {
			var groupMiddlewares = ( Array.isArray(routeGroup.middlewares))?routeGroup.middlewares:[]
			, appliedGroupMdlwrs = [];

			groupMiddlewares.forEach( (middlewares) => {
				appliedGroupMdlwrs.push(Utils.accessObjectPropertyByString(Mdlwr, middlewares))
			})

			routeGroup.routes.forEach( (endpoints) => {
				var method = endpoints[0]
				, url = endpoints[1]
				, target = endpoints[2]
				, middlewares = ( Array.isArray(endpoints[3]))?endpoints[3]:[]
				, appliedMdlwrs = [];

				middlewares.forEach( (mdlwrs) => {
					appliedMdlwrs.push(Utils.accessObjectPropertyByString(Mdlwr, mdlwrs))
				})

				app[method](routeGroup.prefix+url, appliedGroupMdlwrs, appliedMdlwrs, Utils.accessObjectPropertyByString(Controllers, target));
			})
		})

	})
	.catch( err => {
		console.error(err)
	})
}