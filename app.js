const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/sobre', (req, res) => res.sendFile(path.join(__dirname, 'views/sobre.html')));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));