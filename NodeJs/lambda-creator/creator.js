"use strict";
let express = require('express');
let http = require('http');
let app = express();
let expressLayouts = require('express-ejs-layouts');
let bodyParser = require('body-parser');

// middlewares
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.use(expressLayouts);
app.set('views', __dirname + '/resources/views');
app.use(express.static(__dirname + '/resources/views'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/modules', express.static(__dirname + '/node_modules'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

// Application Routes
let routes = require('./routes');
routes.set(app);

const PORT = ( typeof process.env.PORT == 'undefined' ? '3000' : process.env.PORT );

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
