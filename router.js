const express = require('express');
const router = express.Router();
const users = require('./controllers/users.controller');

router.get('/', users.home);
router.post('/register', users.register);

module.exports = router;