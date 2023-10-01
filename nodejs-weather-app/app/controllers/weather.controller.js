const axios = require('axios');
const { BASE_URL, API_Key, PATH } = require('../config/weather_api.config');

const fetchMultipleCities = async (req, res) => {
    try {
        let cities = req.query.city;
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 1;

        if (!cities)
            return res.status(400).send({ message: "Request's query parameters cannot be empty" });

        const isSingleCity = typeof cities === 'string';
        const cityArray = isSingleCity ? [cities] : cities;

        const requests = cityArray.map(async (city) => {
            const { data } = await axios.get(`${BASE_URL}${PATH.current}?q=${city}&key=${API_Key}`);
            console.log(data);
            return data;
        });

        const currentWeatherPerCity = await Promise.all(requests);
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const paginatedData = currentWeatherPerCity.slice(startIndex, endIndex);

        res.status(200).send(paginatedData);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: 'An error occured while fetching weather data' });
    }
};

const fetchForecast = async (req, res) => {
    try {
        const { city, days } = req.query;
        if (!city || !days)
            return res.status(400).send({ message: 'Please provide days and city' });

        const { data } = await axios.get(
            `${BASE_URL}${PATH.forecast}?q=${city}&days=${days}&key=${API_Key}`,
        );
        console.log(data);

        return res.status(200).send(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports.fetchMultipleCities = fetchMultipleCities;
module.exports.fetchForecast = fetchForecast;
