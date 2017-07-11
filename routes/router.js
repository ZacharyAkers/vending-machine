const express = require('express');
const router = express.Router();
const customerRouter = require("./customer.js");
const vendorRouter = require('./vendor.js');

router.use('/api/customer', customerRouter);
router.use('/api/vendor', vendorRouter);

router.get('/', (req, res) => {
  res.send("Welcome!");
});

module.exports = router;