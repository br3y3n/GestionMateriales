import mysql from 'mysql2/promise.js'

export const connection = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'gestion_materiales'
})

connection 
            .query('SELECT 1')
            .then(()=> console.log('Connection sussefely'))
            .catch((err)=>{
                console.log('Error', err)
            })

connection.on('error', (err)=>{
    console.log('Error', err)
})