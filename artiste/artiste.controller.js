const Artiste = require("../artiste/artiste.model.js");

// Create and Save a new artiste
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create an artiste
    const artiste = new Artiste({
        login: req.body.login,
        nom: req.body.nom,
        prenom: req.body.prenom,
        password: req.body.password
    });
    console.log(req.body);
    // Save artiste in the database
    Artiste.create(artiste, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Artiste."
            });
        else res.send(data);
    });
};

// Retrieve all artistes from the database
exports.findAll = (req, res) => {
    Artiste.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving artistes."
            });
        else res.send(data);
    });
};

// Find a single artiste with a artisteId
exports.findOne = (req, res) => {
    Artiste.findById(req.params.artisteId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found artiste with id ${req.params.artisteId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving artiste with id " + req.params.artisteId
                });
            }
        } else res.send(data);
    });
};

// Update a artiste identified by the artisteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Artiste.updateById(
        req.params.artisteId,
        new Artiste(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found artiste with id ${req.params.artisteId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating artiste with id " + req.params.artisteId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a artiste with the specified artisteId in the request
exports.delete = (req, res) => {
    Artiste.remove(req.params.artisteId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found artiste with id ${req.params.artisteId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete artiste with id " + req.params.artisteId
                });
            }
        } else res.send({ message: `Artiste was deleted successfully!` });
    });
};

exports.logIn = (req, res) => {
    console.log(req.body.login, req.body.password);
    Artiste.auth(req.body.login, req.body.password, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found artiste with login ${req.body.login}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving artiste with password " + req.body.password
                });
            }
        } else res.send(data);
    });
};
