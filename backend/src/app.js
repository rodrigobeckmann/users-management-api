const express = require('express');
const loginRouter = require('./routers/login.router');
const userRouter = require('./routers/users.router');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

app.use(express.json());
app.use(express.static('uploadedFiles'))
app.use('/login', loginRouter);
app.use('/users', userRouter);

module.exports = app;