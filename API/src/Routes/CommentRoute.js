const express = require('express');
const CommentController = require('../Controllers/CommentController.js');

const CommentRouter = express.Router();
CommentRouter.get('/', CommentController.getComments);

module.exports = CommentRouter;