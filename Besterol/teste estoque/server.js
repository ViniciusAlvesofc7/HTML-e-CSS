const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'estoque'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL conectado...');
});

// Rota para registrar um produto
app.post('/api/produtos', (req, res) => {
  let produto = req.body;
  let sql = 'INSERT INTO produtos SET ?';
  db.query(sql, produto, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Rota para eliminar um produto
app.delete('/api/produtos/:id', (req, res) => {
  let sql = `DELETE FROM produtos WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Rota para consultar produtos
app.get('/api/produtos', (req, res) => {
  let sql = 'SELECT * FROM produtos';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
