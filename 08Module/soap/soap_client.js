var soap = require('soap')

//Use ESDL link from service
var url = 'http://www.webservicex.net/ConvertTemperature.asmx?WSDL'

var args = {Temperature: 32, FromUnit: 'degreeFahrenheit', ToUnit: 'degreeReaumur'}

soap.createClient(url, (err, client) => {
    client.ConvertTemp(args, (error, result) => {
        if(error) {
            console.error(error)
        } else {
            console.log("The temp after convertion is " + result.ConvertTempResult)
        }
    })
})