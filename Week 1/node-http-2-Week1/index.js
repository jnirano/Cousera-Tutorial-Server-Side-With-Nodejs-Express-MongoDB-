/* 
Lecture 6 Part2: Example 1
   Creating Simple Node HTTP Module Server
*/

// const http = require ('http');

// const hostname = 'localhost';
// const port = 3000;

// //Setting up Server
// const server = http.createServer((req, res) => {
//    console.log(req.headers);

//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/html');
//    res.end('<html><body><h1>Hello World Nodejs!!</h1></body></html>');
// })

// //Starting the Server in Node on port 3000y
// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}`);
// });


/*
Lecture 6 Part2: Example 2
   Setting up node http server to serve static pages/HTML Files using nodejs only.

   This Node http server does not serve the html files properly
*/

const http = require('http');

const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	console.log('Request for ' + req.url + ' by method ' + req.method);

	if (req.method == 'GET') {
		var fileUrl;
		if (req.url == '/') fileUrl = '/index.html';
		else fileUrl = req.url;

		var filePath = path.resolve('./public' + fileUrl);
		const fileExt = path.extname(filePath);
		if (fileExt == '.html') {
			fs.exists(filePath, (exists) => {
				if (!exists) {
					res.statusCode = 404;
					res.setHeader('Content-Type', 'text/html');
					res.end(
						'<html><body><h1>Error 404: ' +
							fileUrl +
							' not found</h1></body></html>'
					);
					return;
				}
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/html');
				fs.createReadStream(filePath).pipe(res);
			});
		} else {
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/html');
			res.end(
				'<html><body><h1>Error 404: ' +
					fileUrl +
					' not a HTML file</h1></body></html>'
			);
		}
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/html');
		res.end(
			'<html><body><h1>Error 404: ' +
				req.method +
				' not supported</h1></body></html>'
		);
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});