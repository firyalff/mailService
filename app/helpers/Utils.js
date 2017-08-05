'use strict';
const methods = {
	accessObjectPropertyByString(object, string){
		try{
			if (typeof object === 'undefined' || typeof string === 'undefined') {
				throw new TypeError('object or string cannot be undefined')
			}

			string = string.replace(/\[(\w+)\]/g, '.$1')
			string = string.replace(/^\./, '')
			var properties = string.split('.')
			for (var i = 0, n = properties.length; i < n; ++i) {
				var processedProperty = properties[i]
				if (processedProperty in object) {
					object = object[processedProperty]
				} 
				else {
					return null
				}
			}
			return object
		}
		catch(err){
			console.log(err)
			return err

		}
	}
	, promisedFS(directoryPath){
		const fs = require("fs")
		, promisedFS = new Promise((resolve, reject)=>{
			fs.readdir(directoryPath, function (err, files) {
				if(err){
					return reject(err);
				}
				else {
					resolve(files)
				}
			});
		})

		return promisedFS
	}

}

module.exports = methods
