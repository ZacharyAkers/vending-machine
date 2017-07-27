const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const routes = require('./routes/routes.js');

const app = express();

app.use('/static', express.static('static'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.use(expressValidator());

if (require.main === module) {
  app.listen(3000, function () {
      console.log('Express running on http://localhost:3000/.')
  });
}

module.exports = app;