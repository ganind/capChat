module.exports = app => {
    const image = require("../image/image.controller");

    // Create a new image
    app.post("/image", image.create);

    // Retrieve all images
    app.get("/neutre", image.findNeutre);

    app.get("/singuliere", image.findSinguliere);

    // Retrieve a single image with imageId
    app.get("/image/:imageId", image.findOne);

    // Update a image with imageId
    app.put("/image/:imageId", image.update);

    // Delete a image with imageId
    app.delete("/image/:imageId", image.delete);

    // Delete all images
    app.delete("/image", image.deleteAll);
};
