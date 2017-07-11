const assert = require('assert');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const request = require('supertest');
const config = require('../config')[process.env.NODE_ENV || "test"];
const item = require('../models/items');
const purchase = require('../models/purchases');
const app = require('../app.js');

before("Connecting to mongo", (done) =>{
  mongoose.connect(config.mongoURL)
});

after("Dropping the databses", (done) => {
  mongoose.connection.dropDatabase(done);
});

