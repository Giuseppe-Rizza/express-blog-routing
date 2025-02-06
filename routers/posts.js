// // Creo le rotte per le operazioni CRUD
// // index
// app.get("/posts", function(req, res) {
//     res.send("Lista dei post");
//     });

// // show
// app.get("/posts/:id", function(req, res) {
// res.send("Dettagli dei post " + req.params.id);
// });

// // store
// app.post("/posts", function(req, res) {
// res.send("Creazione nuovo post");
// });

// // update
// app.put("/posts/:id", function(req, res) {
// res.send("Modifica integrale del post " + req.params.id);
// });

// // modify
// app.patch("/posts/:id", function(req, res) {
// res.send("Modifica parziale del post " + req.params.id);
// });

// // destroy
// app.delete("/posts/:id", function(req, res) {
// res.send("Cancellazione del post " + req.params.id);
// });

// Importo il framework Express usando CommonJS
const express = require("express");

// Creo una variabile router
// N.B.: IN QUESTO CASO NON VA AD ESEGUIRE LA MEGA-FUNZIONE EXPRESS E QUINDI NON CI RITORNERÀ TUTTO L'OGGETTONE DI EXPRESS, MA CI RITORNERÀ SOLO IL METODO ROUTER (OSSIA QUELLA PARTE CHE CI INTERESSA USARE NEL ROUTER PER FARLO FUNZIONARE)
const router = express.Router();


// index
// Nella URI rimuovo il nome della risorsa (/posts), perché dal momento che è il router specifico dell'entità post è implicito il fatto che vada a finire qua (diamo per scontato che siamo già in un endpoint che va ad includere /posts e quindi andiamo a scrivere solo quello che c'è dopo essendo nel router dei posts)
router.get("/", function(req, res) {
    res.send("Lista dei post");
    });

// show
router.get("/:id", function(req, res) {
res.send("Dettagli dei post " + req.params.id);
});

// store
router.post("/", function(req, res) {
res.send("Creazione nuovo post");
});

// update
router.put("/:id", function(req, res) {
res.send("Modifica integrale del post " + req.params.id);
});

// modify
router.patch("/:id", function(req, res) {
res.send("Modifica parziale del post " + req.params.id);
});

// destroy
router.delete("/:id", function(req, res) {
res.send("Cancellazione del post " + req.params.id);
});

// Esporto l'istanza di router
module.exports = router;