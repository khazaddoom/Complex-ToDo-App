const express = require('express');
const router = express.Router();
const guest = require('./controllers/guest.controller')
const users = require('./controllers/users.controller')

router.get('/', guest.home);
router.post('/register', users.register);

module.exports = router;