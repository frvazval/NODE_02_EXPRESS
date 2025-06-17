const express = require('express');
const app = express();

process.loadEnvFile();
const PORT = process.argv[2] || process.env.PORT || 9999

app.get('/', (req, res) => {
    res.send('<h1>Estamos en la pagina inicial o home</h1>');
})

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
} )
