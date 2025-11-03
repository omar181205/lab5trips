const express = require('express')
const app = express();
const TripRouter=require('./routes/TripRoutes');
const cors = require('cors');
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoutes.js');

// const UserRouter=require('./routes/UserRouter');
dotenv.config();
app.use(cors());

app.use(express.json());

app.use('/api/v1/trips',TripRouter);

app.use('auth', authRouter);
// app.use('/apl/v1/users',UserRouter);
module.exports=
{
    app
};