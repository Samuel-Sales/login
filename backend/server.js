// Importando os recursos padroes
const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Criando conexao com o banco de dados
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: ')9dfs318X',
    database: 'login'
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM new_table WHERE username = ? AND password = ?";
    // const values = [
    //     req.body.email,
    //     req.body.password
    // ]
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json('Error');
        // return res.json(data);
        if (data.length > 0) {
            return res.json('Login Successfully')
        }else {
            return res.json('No Record')
        }
    })
})


// Colocando o app para funcionar na porta 8081
app.listen(8081, () => {
    console.log('Listening....');
});