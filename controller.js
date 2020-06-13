const http = require('http');
const url = require('url');

module.exports = http.createServer(async(req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    // GET Endpoint
    if (reqUrl.pathname == '/weatherreport/all' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        await service.getAllWeatherReports(req, res);
    }  

    if (reqUrl.pathname == '/weatherreport' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        await service.getWeatherReportOf(req, res);
    }  
});
