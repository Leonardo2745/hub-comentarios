const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const server = express();

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(cors());

const CommentRouter = require('./src/Routes/CommentRoute.js')

server.use('/user', userRouter);

const PORT = 7000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if (err) return console.log(err);
    console.log('Conectado com sucesso!');
})

server.get('/', (req, res) => {
    res.send(`<h1>Só sabo que nada sebo</h1>
    <ul>
    <li><a href="http://localhost:7000/comment">Get de comments</li>
    <li><a href="http://localhost:7000/user">Get de user</li>
    <li><a href="http://localhost:7000/user-comments/2">Get de user comments</li>


    </ul>`);
})

const userRouter = require('./src/Routes/UserRoute')                         


server.listen(PORT, () => {
    console.log(`O server está rodando em http://localhost:${PORT}`)
})