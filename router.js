const express = require('express');
const router = express.Router();
const usersController = require('./controllers/users.controller');

router.get('/', usersController.home);
router.post('/register', usersController.register);

module.exports = router;