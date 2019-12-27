const express = require('express');
const router = express.Router();
const guest = require('./controllers/guest.controller')

router.use('/', guest.home);

module.exports = router;