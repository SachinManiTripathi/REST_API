const mysql = require('mysql2');

//details of a database to create pool of connection else use createConnection for single connection
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Sachin@#123'
});

module.exports = pool.promise();