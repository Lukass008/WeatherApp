var express = require('express'),
	weatherService = require('../services/weatherService');

module.exports = (function() {
	var router = express.Router();

	//Get data by single id
	router.get('/weather/:id', weatherService.getById);
	//Get data by ids list
	router.get('/weather/list/:ids', weatherService.getByList);
	return router;
})();