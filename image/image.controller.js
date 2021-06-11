const Image = require("../image/image.model.js");

// Create and Save a new image
exports.create = (req, res) => {
// Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a image
    const image = new Image({
        chemin: req.body.chemin,
        indice: req.body.indice,
        type_image: req.body.type_image
    });

    // Save image in the database
    Image.create(image, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the image."
            });
        else res.send(data);
    });
};

// Retrieve all images from the database.
exports.findNeutre = (req, res) => {
    Image.getNeutre((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving images."
            });
        else res.send(data);
    });
};

// Retrieve all images from the database.
exports.findSinguliere = (req, res) => {
    Image.getSinguliere((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving images."
            });
        else res.send(data);
    });
};


// Find a single image with a imageId
exports.findOne = (req, res) => {
    Image.findById(req.params.imageId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found image with id ${req.params.imageId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving image with id " + req.params.imageId
                });
            }
        } else res.send(data);
    });
};

// Update a image identified by the imageId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Image.updateById(
        req.params.imageId,
        new Image(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found image with id ${req.params.imageId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating image with id " + req.params.imageId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a image with the specified imageId in the request
exports.delete = (req, res) => {
    Image.remove(req.params.imageId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found image with id ${req.params.imageId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete image with id " + req.params.imageId
                });
            }
        } else res.send({ message: `image was deleted successfully!` });
    });
};

// Delete all images from the database.
exports.deleteAll = (req, res) => {
    Image.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all images."
            });
        else res.send({ message: `All images were deleted successfully!` });
    });
};

exports.uploadSingulier = (req, res) => {
    Image.uploadSingulier(req,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while uploading singulières images."
            });
        else res.send({ message: `All images were uploaded successfully!` });
    })
}
exports.uploadNeutre = (req, res) => {
    Image.uploadNeutre(req,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while uploading neutres images."
            });
        else res.send({ message: `All images were uploaded successfully!` });
    })
}


