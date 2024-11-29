const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    PORT: 3306,
    user: 'root',
    password: '',
    database: 'aulabd'
});

//Conectando o banco de dados
db.connect((erro)) => {
    if{erro}{
        console.error('erro ao conectar ao Mysql:', erro);
    } else {
        console.log('')
    }
}