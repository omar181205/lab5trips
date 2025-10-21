const express = require('express')
const app = express();
const TripRouter=require('./routes/TripRoutes');
// const UserRouter=require('./routes/UserRouter');

app.use(express.json());
app.use('/api/v1/trips',TripRouter);
// app.use('/apl/v1/users',UserRouter);
module.exports=
{
    app
};