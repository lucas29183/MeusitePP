const express         = require('express');
const cors            = require('cors');
const app             = express();
require('dotenv').config();
const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter')

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT);
app.use('/api', userRouter);
app.use('/api', loginRouter);

module.exports = app;