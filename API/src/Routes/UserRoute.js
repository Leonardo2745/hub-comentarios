
const express = require('express');
const router = express.router();
const UserController = require('../Controllers/UserController')

router.get('/',UserController.getUsers)

module.exports = router;