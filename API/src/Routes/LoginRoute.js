const express = require('express')
const LoginController = require('../Controllers/LoginController.js')

const LoginRouter = express.Router()

LoginRouter.post('/login', LoginController.login)

LoginRouter.post('/logout', LoginController.logout)

module.exports = LoginRouter;