
const express = require('express');
const UserRouter = express.Router();
const UserController = require('../Controllers/UserController')

router.get('/',UserController.getUsers)

module.exports = UserRouter