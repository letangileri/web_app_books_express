const mysql2 = require('mysql2')
const connection = mysql2.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect((err)=>{
    if(err){
        console.error('errore', err);
        return
    }
    console.log('Connected to MySQL Database');
    
})

module.exports=connection;