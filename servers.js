const http = require("http");

const PORT = 7000;
const PORT2 = 7500;

function handleRequest(request, response) {
	response.end("You're Great!" + request.url);
}
function handleRequest2(request, response) {
	response.end("You're a Disgrace..." + request.url);
}
const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

server.listen(PORT, function(){
	console.log("Server listening on http://localhost:%s", PORT);
})
server2.listen(PORT2, function(){
	console.log("Server listening on http://localhost:%s", PORT2);
})
