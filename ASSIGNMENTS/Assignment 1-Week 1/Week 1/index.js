const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const port = 3000;
const hostname = 'localhost';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//Mountain the dishes
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

//Rendering the static file
app.use(express.static(__dirname+ '/public') );

app.use((req, res, next) => { 
   // console.log(req.headers);

   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end('<html><body><h1> This is coming from Express Router Server. </h1></body></html>');
});

const server =  http.createServer(app);

server.listen(port, hostname, () => {
   console.log(`This server is now running at port: ${port}:${hostname}`);  
});