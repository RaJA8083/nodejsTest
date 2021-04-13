const express = require('express');
const app=express();
const CategoryRoute =require('./route/categoryRoute');
import { createConnect } from './Config/db';

/*= ===Database config===*/
createConnect();


require('dotenv').config()
const PORT= process.env.PORT ||3000;

app.use('/v1',CategoryRoute);
app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server is running on the port: ${PORT}`);
    }})

