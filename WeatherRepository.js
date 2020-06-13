'use strict';
const fetch = require('node-fetch');
const API_KEY = '92546184b7951f6fcc521345980548e9';

const openWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const getWeatherOfTheDay = async function (city) {
    const reqUrl = openWeatherApiUrl+`?lat=${city.lt}&lon=${city.ln}&appid=${API_KEY}&units=metric`
    const response = await fetch(reqUrl);
    return await response.json();
}
module.exports.getWeatherOfTheDay = getWeatherOfTheDay;
