const {
    fetchMultipleCities,
    fetchForecast,
    fetchCityForecast,
} = require('../controllers/weather.controller');

// const weather = require('../controllers/weather.controller');
const weatherRouter = require('express').Router();

weatherRouter.get('/city', fetchCityForecast);
weatherRouter.get('/cities', fetchMultipleCities);
weatherRouter.get('/forecast', fetchForecast);

module.exports = weatherRouter;
