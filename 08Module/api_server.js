var http = require('http')
var url = require('url')

//set port for server to listen
var port = 8000

//Declare variables for the JSON response
var hour = 0
var minute = 0
var sec = 0

http.createServer((req, res) => {
    //Take incoing url and parse  it into a URL object
    var incoming_url = url.parse(req.url, true)

    //Extract the data portion
    var d = new Date(incoming_url.query.iso)
    var u = incoming_url.pathname

    //JSON string responce
    if(u === '/api/parsetime') {
        hour = d.getHours()
        minute = d.getMinutes()
        sec = d.getSeconds()

        res.writeHead(200, {'Content-type' : 'aplication/json'})

        var jsonTime = {
            "hour" : hour,
            "minute" : minute,
            "second" : sec
        }
        res.end(JSON.stringify(jsonTime))
    }

    if(u === '/api/unixtime') {
        var unix = d.getTime()
        res.writeHead(200, {'Content-type' : 'application/json'})
        var jsonUnixTime = {
            "unixtime" : unix
        }
        res.end(JSON.stringify(jsonUnixTime))
    }

}).listen(port)