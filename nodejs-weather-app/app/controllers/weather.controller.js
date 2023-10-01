const axios = require('axios');
const { BASE_URL, API_Key, PATH } = require('../config/weather_api.config');

const fetchMultipleCities = async (req, res) => {
    try {
        let cities = req.query.city;
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
        res.status(200).send(currentWeatherPerCity);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: 'An error occured while fetching weather data' });
    }
};

module.exports.fetchMultipleCities = fetchMultipleCities;
