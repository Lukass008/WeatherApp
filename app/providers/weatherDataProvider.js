var YQL = require('yql');

var WeatherDataProvider = function() {	
}

WeatherDataProvider.instance = null;


WeatherDataProvider.prototype.weatherByZip = function(zipCode, callback) {
	var query = 'select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="' + zipCode + '" limit 1)';
	return this.yahooQuery(query, callback);
}

//function to get data from YQL by query
WeatherDataProvider.prototype.yahooQuery = function(query, callback) {
	var query = new YQL(query);		

	var data = query.exec(function(err, data) {
		if(err) {
			console.log("ERROR");
			return callback({status: "ERROR", code: err.code, message: err.message}, null);
		} else {
			return callback(null, {status: "OK", data: data});
		}
	})
	return data;
}

//function creating instance of WeatherDataProvider if not exist yet
WeatherDataProvider.getInstance = function() {
	if(this.instance === null) {
		this.instance = new WeatherDataProvider();
	}
	return this.instance;
}

module.exports.WeatherProvider = WeatherDataProvider.getInstance();
