const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/db_connect.js');
require('dotenv').config();

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

const CommentRouter = require('./src/Routes/CommentRoute.js');
server.use('/comment', CommentRouter);

const UserRouter = require('./src/Routes/UserRoute.js');
server.use('/user', UserRouter);

const LoginRouter = require('./src/Routes/LoginRoute.js');
server.use('/session', LoginRouter);

const PORT = 7000;



server.post('/comment', (req, res) => {
    const { userId, comment_text } = req.body;
    db.query('INSERT INTO comment (userId, comment_text) VALUES (?, ?)', [userId, comment_text], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }
        res.json({ success: true });
    })
})

server.listen(PORT, () => {
    console.log(`O server está rodando em http://localhost:${PORT}`)
})