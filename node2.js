var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("SATYA<b>GANZ HEKER</b>")
    response.write('URL: ' + request.url);
    response.end();
}).listen(8000);

console.log('Server running on http://localhost:8000');