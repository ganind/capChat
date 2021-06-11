module.exports = app => {
    const artistes = require("../artiste/artiste.controller");

    // Create a new Artiste
    app.post("/artistes", artistes.create);

    // Retrieve all artistes
    app.get("/artistes", artistes.findAll);

    // Retrieve a single artiste with artisteId
    app.get("/artistes/:artisteId", artistes.findOne);

    // Update an artiste with artisteId
    app.put("/artistes/:artisteId", artistes.update);

    // Delete an artiste with artisteId
    app.delete("/artistes/:artisteId", artistes.delete);

    // Authentification of an Artist
    app.post("/auth", artistes.logIn);
};
