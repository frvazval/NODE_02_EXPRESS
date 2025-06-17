const express = require('express');
const path = require("node:path");
const app = express();

process.loadEnvFile();
const PORT = process.argv[2] || process.env.PORT || 9999;

app.use(espress.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send('<h1>Estamos en la pagina inicial o home</h1>');
})

app.get("/api", (req, res) => {
    res.json({"curso": "NODE", "tema": "Express"});
} )

app.use((req, res) => {
    // res.status(404).send("<h1>Error 404: No existe esta ruta</h1>");
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
})



// Para indicar el puerto por el que se conecta
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
} )

