'use strict';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const es6renderer = require('express-es6-template-engine');
app.engine('html', es6renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log()
});

const rootController = require('./routes/index');
const malletController = require('./routes/mallets');

app.use('/', rootController);
app.use('/mallets', malletController);
