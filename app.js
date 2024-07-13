const express = require('express');
const bodyParser = require('body-parser');

const db = require('./utils/database');



const feedRoutes = require('./routes/feed');

const app = express();

// fetching all products

db.execute('SELECT * FROM products')
.then(result=>{
    console.log(result[0],result[1]);
})
.catch(err=>{
    console.log(err);
});

//inserting all products in a data base

db.execute('INSERT INTO products (title,price,imageURL, description) VALUES (?,?,?,?)',['Nokia',1300,'aaaa','hello this is nokia'])
.then(console.log('data added'))
.catch((err)=> console.log(err));


// selecting a product by id
db.execute('SELECT * FROM products WHERE products.id=12').then(result=>{
    console.log(result);
})
.catch((err)=> console.log(err));


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