var http = require('http')
var url = require('url')

function start (route) {
  function onRequest (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname)

    route(pathname)

    res.writeHead(200, { 'content-type': 'text/plain' })
    res.write('Hello world')
    res.end()
  }

  http.createServer(onRequest).listen(3000)
  console.log('Server has started')
}

exports.start = start