const Sydney = {
    cityName: 'Sydney',
    lt: '-33.865143',
    ln: '151.209900'
}

const Perth = {
    cityName: 'Perth',
    lt: '-31.9505',
    ln: '115.8605'
}
const Melbourne ={
    cityName: 'Melbourne',
    lt: '-37.840935',
    ln: '144.946457'

}
const Adelaide = {
    cityName: 'Adelaide',
   lt: '-34.921230',
   ln: '138.599503'
}
const Brisbane = {
    cityName: 'Brisbane',
    lt:'-27.470125',
    ln:'153.021072'
}
let citiMap = new Map();
citiMap.set(Brisbane.cityName, Brisbane);
citiMap.set(Melbourne.cityName, Melbourne);
citiMap.set(Sydney.cityName, Sydney);
citiMap.set(Perth.cityName, Perth);

module.exports = {
    SYDNEY: Sydney,
    MELBOURNE: Melbourne,
    BRISBANE: Brisbane,
    ADELAIDE: Adelaide,
    PERTH: Perth,
    CITIESMAP:citiMap
}