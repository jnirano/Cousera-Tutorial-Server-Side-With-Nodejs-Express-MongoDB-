/*
LECTURE 13
Example 1:  Using express to create simple node server
*/ 
// const express = require ('express');
// const http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const app = express();

// app.use((req, res, next) => {
//    console.log(req.headers);
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/html');
//    res.end('<html><body><h1>This is an Express Server. </h1></body></html>')
// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}`)
// });


/*
LECTURE 13:-
EXAMPLE 2: Using express to Serve Static HTML Files
*/
// const express = require ('express');
// const http = require('http');
// const morgan = require ('morgan');

// const hostname = 'localhost';
// const port = 3000;

// const app = express();
// app.use(morgan('dev'));

// app.use(express.static(__dirname+ '/public'));

// app.use((req, res, next) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/html');
//    res.end('<html><body><h1>This is an Express Server. </h1></body></html>')
// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}`)
// });



/*
LECTURE 16:-
EXAMPLE 1: Topic: Express Routers :- Setting up the REST API End points without express router
*/
// const express = require ('express');
// const http = require('http');
// const morgan = require ('morgan');
// const bodyParser = require ('body-parser');

// const hostname = 'localhost';
// const port = 3000;

// const app = express();

// app.use(morgan('dev'));
// app.use(bodyParser.json());

// // //Building REST API SUPPORT FOR /dishes
// app.all('/dishes', (req, res, next) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    next();
// });

// app.get('/dishes', (req, res, next) => {
//    res.end('Will send all the dishes to you!!');
// });

// app.post('/dishes', (req, res, next) => {
//   res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
// });

// app.put('/dishes', (req, res, next) => {
//    res.statusCode = 403;
//   res.end('Put operation not supported on /dishes');
// });

// app.delete('/dishes', (req, res, next) => {
//   res.end('Deleting all the dishes!');
// });


// //  Building REST APIs for PARAMS http://localhost:3000
// app.get('/dishes/:dishid', (req, res, next) => {
//    res.end('Will send detail of the dish: ' + req.params.dishid + ' to you!');
// });

// app.post('/dishes/:dishid', (req, res, next) => {
//    res.statusCode = 403;
// 	res.end('Put operation not supported on /dishes' + req.params.dishid);
// });

// app.put('/dishes/:dishid', (req, res, next) => {
//    res.write('Updating the dish: ' + req.params.dishid);
//    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
// });

// app.delete('/dishes/:dishid', (req, res, next) => {
//   res.end('Deleting dish: ' + req.params.dishid);
// });

// app.use(express.static(__dirname+ '/public'));

// app.use((req, res, next) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/html');
//    res.end('<html><body><h1>This is an Express Server. </h1></body></html>')
// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}`)
// });



/*
LECTURE 16:-
EXAMPLE 2: USING EXPRESS ROUTER FOR IMPLEMENTATION OF REST API

*/

const express = require ('express');
const http = require('http');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');

const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter); //mountain the dishes

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end('<html><body><h1>This is an Express Server. </h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}`)
});