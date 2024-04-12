const express = require('express');
const CommentController = require('./controller/CommentController');

const CommentRouter = express.Router();

CommentRouter.get('/', CommentController.getComments);

module.exports = CommentRouter;
