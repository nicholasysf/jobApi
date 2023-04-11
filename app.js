const express = require('express');
const app = express();

const dotenv = require('dotenv');

//Setting up config.env file variables
dotenv.config({path : './config/config.env'});


//Connecting to database

//Creating middleware 




//Importing all routes
const jobs = require('./routes/jobs');

app.use('/api/v1',jobs);

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT} in ${process.env.NODE_ENV} MODE.`);
});



