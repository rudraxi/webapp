const wr = require ('./WeatherRepository');
const moment = require('moment');
const cityConstants = require('./CityConstants');

const getWeatherReport = async function (city) {
    let dailyReport ={};
    const report = await wr.getWeatherOfTheDay(city);
    // wr.getWeatherUpdatesOfSydney().then((report) =>{
    dailyReport = {
        cityName: city.cityName,
        sunRise : moment(report.daily[0].sunrise*1000).format('HH:mm'),
        sunSet : moment(report.daily[0].sunset*1000).format('HH:mm'),
        temp :{
        averageTemp : report.daily[0].temp.day,
        minTemp : report.daily[0].temp.min,
        maxTemp : report.daily[0].temp.max
            },

        humidityDaily : report.daily[0].humidity,
        windSpeed : report.daily[0].wind_speed,
        weather : report.daily[0].weather[0].description,
        uvIndex : report.daily[0].uvi

    }
    return await dailyReport;
}
const getAllWeatherReports = async function (){
    const dailyReports = [];
    dailyReports.push(await getWeatherReport(cityConstants.SYDNEY));
    dailyReports.push(await getWeatherReport(cityConstants.MELBOURNE));
    dailyReports.push(await getWeatherReport(cityConstants.BRISBANE));
    dailyReports.push(await getWeatherReport(cityConstants.ADELAIDE));
    dailyReports.push(await getWeatherReport(cityConstants.PERTH));

    return dailyReports;

}
const getWeatherReportOf = async function (cities){
    const dailyReport = [];
    for(city of cities){
        dailyReport.push(await getWeatherReport(cityConstants.CITIESMAP.get(city)));
    }
    return dailyReport;
}
    //console.log(dailyReport);
    module.exports.sydneyWeatherReport = getWeatherReport;
    module.exports.getAllWeatherReports = getAllWeatherReports;
    module.exports.getWeatherReportOf = getWeatherReportOf;




