// Creo le rotte per le operazioni CRUD
// index
app.get("/posts", function (req, res) {
    res.send("Lista dei post");
    });

// show
app.get("/posts/:id", function (req, res) {
res.send("Dettagli dei post " + req.params.id);
});

// store
app.post("/posts", function (req, res) {
res.send("Creazione nuovo post");
});

// update
app.put("/posts/:id", function (req, res) {
res.send("Modifica integrale del post " + req.params.id);
});

// modify
app.patch("/posts/:id", function (req, res) {
res.send("Modifica parziale del post " + req.params.id);
});

// destroy
app.delete("/posts/:id", function (req, res) {
res.send("Cancellazione del post " + req.params.id);
});