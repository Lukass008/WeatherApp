var async =  require('async'),
	weatherProvider = require('../providers/weatherDataProvider.js').WeatherProvider;


module.exports = {
	//function getting data by weather provider (only this used in app)
	getById: function(req, res, next) {
		console.log("getting by id");
		weatherProvider.weatherByZip(req.params.id, function(err, data) {
			if(err) {
				console.log(err);
				res.json(err);
			} else {
				console.log("I've got data and I'm sending them in response");
				res.json(data);
			}
		});
	},

	//function to get weather data by listed ids in params of request (function unused)
	getByList: function(req, res, next) {
		var list = req.params.ids.split(','),
			array = [];
		//asynchronic getting data from Yahoo
		async.each(list, function(id, callback) {
			//for each id get data by provider
			weatherProvider.weatherByZip(id, function(err, data) {
				if(err) {
					return callback(err);
				} else {
					array.push(data.data);
					return callback();
				}
			})
		//handling errors
		}, function(err) {
			if(err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(array);
			}		
		});
		
	}
}