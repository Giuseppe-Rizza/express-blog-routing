// Testo la corretta funzionalità in seguito all'inizializzazione del progetto
// console.log("Ciao");

// Importo il framework Express usando CommonJS
const express = require("express");

// Inizializzo Express invocandolo come una funzione e salvo il risultato in una variabile
const app = express();

// Do una porta
const port = 3000;

// Definisco l'uso di una cartella per i file statici
app.use(express.static("public"));

// Definisco la prima rotta
app.get("/", (req, res) => {
    // Se l'utente finisce sull'endpoint / gli ritorna un testo con scritto "Server del mio blog"
    res.send("Server del mio blog");
});

// Definisco la rotta /bacheca ed importo l'array fornito nel file posts.js
app.get("/bacheca", (req, res) => {
    const posts = require("./posts");

    // Ritorno l'array di post in formato Json
    res.json(posts);
});

// Avvio il server, mettendolo in ascolto sulla porta indicata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});