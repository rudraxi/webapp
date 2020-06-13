const url = require('url');
const weatherService = require('./weatherService');


exports.getAllWeatherReports = async function (req, res) {
    const reqUrl = url.parse(req.url, true);
    const response = await weatherService.getAllWeatherReports();
    console.log(response);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(response));
};

exports.getWeatherReportOf = async function (req, res) {
    const reqUrl = url.parse(req.url, true);
    console.log(reqUrl.query);
    const response = await weatherService.getWeatherReportOf(reqUrl.query.city.split(','));
    console.log(response);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.end(JSON.stringify(response));
};
