// Include http module.
var http = require("http");
// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
http.createServer(function(request, response) {
  // Write headers to the response.
  // 200 is HTTP status code (this one means success)
  // Second parameter holds header fields in object
  // We are sending plain text, so Content-Type should be text/plain
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World from server");
  //End of response
  response.end();
  // Listen on the 8888 port.
}).listen(8888);
