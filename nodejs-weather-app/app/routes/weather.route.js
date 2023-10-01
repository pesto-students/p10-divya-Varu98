const { fetchMultipleCities } = require('../controllers/weather.controller');

// const weather = require('../controllers/weather.controller');
const weatherRouter = require('express').Router();

weatherRouter.get('/cities', fetchMultipleCities);

module.exports = weatherRouter;
