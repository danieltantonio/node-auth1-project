const express = require('express');
const bcrypt = require('bcryptjs');
const server = express();
const cors = require('cors');
const session = require('express-session');

const authMw = require('./middleware/authMiddlware');

const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const sessionConfiguration = {
    secret: process.env.SESSION_SECRET || 'iwanttosleep',
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 10,
        secure: process.env.SECURE_COOKIES || false
    },
    resave: false,
    saveUninitialized: true
}

server.use(express.json());
server.use(cors());
server.use(session(sessionConfiguration ));

server.use('/api/users', authMw, userRouter);
server.use('/api/login', loginRouter);
server.use('/api/register', userRouter);

server.get('/', authMw, (req,res) => {
    res.json({ api: 'up', session: req.session });
});

module.exports = server;