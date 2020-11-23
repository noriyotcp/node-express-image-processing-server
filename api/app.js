const { path } = require("ramda");

const express = require('express');
const _path = require('path');
const router = require('./src/router');

const app = express();
const pathToIndex = _path.resolve(__dirname, '../client/index.html');

app.use('/', router);
app.use(express.static(_path.resolve(__dirname, 'uploads')));
app.use('/*', (request, response) => {
  response.sendFile(pathToIndex);
});
module.exports = app;
