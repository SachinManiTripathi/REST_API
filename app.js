const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const app = express();
// app.use(bodyParser.urlencoded()) for <form>
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');//second argument for url * for all domain else domain url
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-type, Authorization');
    next();
})
app.use('/feed', feedRoutes);
app.listen(8080);