const express = require('express');
const bcrypt = require('bcryptjs');
const server = express();

const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');

server.use(express.json());

server.use('/api/users', userRouter);
server.use('/api/login', loginRouter);
server.use('/api/register', userRouter);

server.get('/', (req,res) => {
    const hash = process.env.
    res.status(200).json({ message: "It works!" });
});

module.exports = server;