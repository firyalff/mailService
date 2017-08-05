'use strict';

const methods = {
	response(message, data, error) {
		try{
			return {
				message: message,
				result: data,
				error: (error!=null)?error:null
			}
		}
		catch(err){
			return err
		}
	},
	responsePaging(message, data, error) {
		try{
			var result = {
				items: data.values,
				length : parseInt(data.length),
				start : parseInt(data.start),
				remaining: parseInt(data.totalData) - parseInt(data.start) + parseInt(data.length)
			}

			return {
				message: message,
				result: result,
				error: (error!=null)?error:null
			}
		}
		catch(err){
			return err
		}
	}
};

module.exports = methods;