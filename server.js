var http = require('http');
var fs = require('fs');

http.createServer( function (request, response) 

{

response.writeHead( 200, { 'Content-Type': 'text/html' } );
fs.createReadStream("./index.html").pipe(response);

//response.end('<h1> Hello World!</h1>');

}).listen(8080, function() { 

console.log('Server running at https://kimgeuntae.kr:8080');

});