// Testo la corretta funzionalità in seguito all'inizializzazione del progetto
// console.log("Ciao");

// Importo il framework Express usando CommonJS
const express = require("express");

// Inizializzo Express invocandolo come una funzione e salvo il risultato in una variabile
const app = express();

// Do una porta
const port = 3000;

// Importo il router
const postsRouter = require("./routers/posts");
const posts = require("./array_posts");

// Definisco l'uso di una cartella per i file statici
app.use(express.static("public"));

// Definisco la prima rotta
app.get("/", (req, res) => {
    // Se l'utente finisce sull'endpoint / gli ritorna un testo con scritto "Server del mio blog"
    res.send("Server del mio blog");
});

// Definisco la rotta /bacheca ed importo l'array fornito nel file posts.js
app.get("/bacheca", (req, res) => {
    const posts = require("./array_posts");

    // Ritorno l'array di post in formato Json
    res.json(posts);
});

// Indico l'esesitenza di nuove rotte specificando il prefisso (/posts, che non devo aggiungerlo nella rotta dall'altra parte in posts.js) e il router (postsRouter)
// N.B.: la funzione USE ha due argomenti: il PATH BASE delle rotte (che verrà aggiunto come prefisso ad ogni rotta creata tramite il router) e l'ISTANZA DEL ROUTER da usare in questo specifico punto
app.use("/posts", postsRouter);

// Avvio il server, mettendolo in ascolto sulla porta indicata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});