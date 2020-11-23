const { path } = require("ramda");

const express = require('express');
const _path = require('path');
const app = express();
const pathToIndex = _path.resolve(__dirname, '../client/index.html');

app.use('/*', (request, response) => {
  response.sendFile(pathToIndex);
})
module.exports = app;
